import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import firebase from '../../firebase';


const columns = [
    {
        title: "Nombre del cliente",
        dataIndex: "namecliente",
        key: "namecliente",

    },
    {
    title: 'Tipo',
    dataIndex: 'tipo',
        onFilter: (value, record) => record.tipo === value,
    key: 'tipo',
    render: text => <a href="">{text}</a>,
        filters: [{
              text: 'Efectivo',
            value: 'efectivo',
        }, {
            text: 'Tarjeta',
            value: 'tarjeta',
        }, {
            text: 'Otro',
            value: 'otro'
        }],
},
    {
        title:"Subtipo",
        dataIndex:"subtipo",
        key:"subtipo",
        render: text => <a href="">{text}</a>,
        filters: [{
            text: 'Contado',
            value: 'contado',
        }, {
            text: 'Tres pagos',
            value: 'trespagos',
        }, {
            text: 'Cinco pagos',
            value: 'cincopagos'
        },

            {
                text: 'Débito',
                value: 'debito'
            },
            {
                text: 'Crédito',
                value: 'credito'
            }],
        onFilter: (value, record) => record.tipo === value
    },
    {
    title: 'Fecha de cita',
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
    <a>Borrar</a>
  </Popconfirm>

      <span className="ant-divider" />

    </span>
    ),
}];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/cliente/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado");

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
                        style={{minWidth:'900px'}}
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
