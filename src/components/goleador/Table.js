import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message, Button } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../firebase';


const columns = [
    {
        title: "Nombre del jugador",
        dataIndex: "nombreplayer",
        key: "nombreplayer",

    },

    {
        title: 'Puntos',
        dataIndex: 'puntos',
        sorter: (a, b) => a.puntos - b.puntos,
        key: 'puntos',
        render: puntos => <span>{puntos}</span>
    },


    {
        title: "Goles hasta el momento",
        dataIndex: "goles",
        key: "goles",

    },


    {
        title: 'Torneo',
        dataIndex: 'tipo',
        onFilter: (value, record) => record.tipo === value,
        key: 'tipo',
        filters: [{
            text: 'Copa del Rey',
            value: 'copadelrey',
        }, {
            text: 'Copa America',
            value: 'america',
        }, {
            text: 'Copa Oro',
            value: 'oro'
        },
            {
                text: 'Copa Libertadores',
                value: 'libertadores'
            },
            {
                text: 'Copa Africana',
                value: 'africana'
            },
            {
                text: 'Copa Argentina',
                value: 'argentina'
            },
            {
                text: 'Confederaciones',
                value: 'confederaciones'
            },
            {
                text: 'Copa Sudamericana',
                value: 'sudamericana'
            },
            {
                text: 'Copa Femenil',
                value: 'femenil'
            }


        ],
    },



    {
        title: 'Fecha',
        dataIndex: 'fecha',
        sorter: (a, b) => a.fecha - b.fecha,
        key: 'fecha',
        render: fecha => <span>{moment(fecha).format('LL')}</span>
    },  {
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
    },



];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/goleadores/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado la liga");

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
                                    console.log(srk[k].puntos);
                                    total += parseInt(srk[k].puntos);
                                }
                                this.setState({total});
                                //return total;
                            }}}
                        footer={()=>"Totales: "+this.state.total}


                    />
                </QueueAnim>



            </div>
        );
    }
}



export default ShowTable;
