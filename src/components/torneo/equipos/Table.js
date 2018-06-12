import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import firebase from '../../../firebase';


const columns = [
    {
        title: "Nombre del equipo",
        dataIndex: "names",
        key: "names",

    },


    {
        title: 'Fecha de ingreso',
        dataIndex: 'fecha',
        sorter: (a, b) => a.fecha - b.fecha,
        key: 'fecha',
        render: fecha => <span>{moment(fecha).format('LL')}</span>
    }, {
        title: 'Copas Ganadas',
        dataIndex: 'copas',
        sorter: (a, b) => a.copas - b.copas,
        key: 'copas',
        render: copas => <span>{copas} copas</span>
    }, {
        title: 'Eliminar',
        key: 'action',
        render: (text, record) => (
            <span>
      <span className="ant-divider" />
      <Popconfirm onConfirm={()=>borrarItem(record)} title="¿Estás seguro？" okText="Sí" cancelText="No">
 <a style={{color:'#35a375'}}>Borrar</a>
  </Popconfirm>

      <span className="ant-divider" />

    </span>
        ),
    }];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/torneouno/equipos/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado el ingreso");

};

let total = 0;
const footer = () => 'Total: ' + total;
const title = () => '';
const showHeader = true;
const scroll = { y: 240 };
class ShowTable extends Component{

    state = {
        bordered: false,
        //loading: false,
        pagination: true,
        size: 'default',
        title,
        showHeader,
        // footer,
        rowSelection: {},
        scroll: undefined,
        total:0

    };

    componentWillMount(){

    }

    footer = () => {return "el foot"};



    render(){
        const {data, loading} = this.props;
        return(
            <div>
                <QueueAnim>
                    <Table
                        bordered={true}
                        style={{minWidth:'1000px'}}
                        {...this.state}
                        loading={loading}
                        columns={columns}
                        dataSource={data}

                        rowSelection={{onChange:(sr,srk)=>{
                                console.log("rows: ", sr);
                                console.log("keys: ", srk);
                                let total = 0;
                                for (let k in srk){
                                    console.log(srk[k].copas);
                                    total += parseInt(srk[k].copas);
                                }
                                this.setState({total});
                                //return total;
                            }}}
                        footer={()=>"Total de copas ganadas por torneo: "+this.state.total}
                    />
                </QueueAnim>



            </div>
        );
    }
}



export default ShowTable;
