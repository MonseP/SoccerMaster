import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message, Button } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../firebase';


const columns = [
    {
        title: "Número de la jornada",
        dataIndex: "names",
        key: "names",

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

    {
        title: 'Equipos del torneo',
        key: 'action',
        render: (text, record) => (
            <span>
      <span className="ant-divider" />

      <Link to={"/equipos-rey"}>
       <a style={{color:'#389349'}}>Ver equipos</a>

              </Link>




      <span className="ant-divider" />

    </span>

        ),
    }



    ];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/torneoseis/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado la liga");

};

let total = 0;
const footer = () => 'Total: ' + total;
const expandedRowRender = record => <p>{record.description}</p>;
const title = () => '';
const showHeader = true;
const scroll = { y: 240 };
class ShowTable extends Component{

    state = {
        bordered: false,
        //loading: false,
        pagination: true,
        size: 'default',
        expandedRowRender,
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
                        expandedRowRender={record => <p>{record.description}</p>}

                    />
                </QueueAnim>



            </div>
        );
    }
}



export default ShowTable;
