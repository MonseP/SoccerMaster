import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table, Icon, Popconfirm, message, Button } from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
import 'moment/locale/es';
import firebase from '../../../firebase';


const columns = [
    {
        title: "Nombre del equipo",
        dataIndex: "equiponame",
        key: "equiponame",

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
    }




];

const borrarItem = (r) => {
    console.log(r);
    let updates = {};
    updates['/torneotres/equipos/teamliber/' + r.key] = null;
    firebase.database().ref().update(updates);
    message.warning("Se ha borrado la liga");

};


const expandedRowRender = record =><div>
    <p> Arquero: {record.namearquero} | Nacimiento: {record.arquerodate} | Número: {record.numberarquero}  </p>
    <p> Defensa: {record.defensauno}  | Nacimiento: {record.defensaunodate} | Número:{record.numberdefensauno} </p>
    <p> Defensa: {record.defensados}  | Nacimiento: {record.defensadosdate} | Número:{record.numberdefensados}</p>
    <p> Defensa{record.defensatres}  | Nacimiento: {record.defensatresdate} | Número:{record.numberdefensatres}</p>
    <p> Defensa: {record.defensacuatro}  | Nacimiento: {record.defensacuatrodate} | Número:{record.numberdefensacuatro}</p>
    <p> Medio: {record.mediouno}  | Nacimiento: {record.mediounodate} | Número:{record.numberdefensatres}</p>
    <p> Medio: {record.mediodos}  | Nacimiento: {record.mediodosdate}  | Número:{record.numbermediodos}</p>
    <p> Medio: {record.mediotres}  | Nacimiento: {record.mediotresdate} | Número:{record.numbermediotres}</p>
    <p> Medio: {record.mediocuatro}  | Nacimiento: {record.mediocuatrodate}  Número:{record.numbermediocuatro}</p>
    <p> Delantero: {record.delanterouno}  | Nacimiento: {record.delanterounodate}  Número:{record.numberdelanterouno}</p>
    <p> Delantero: {record.delanterodos}  | Nacimiento: {record.delanterodosdate} Número:{record.numberdelanterodos}</p>






</div>;




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
                        expandedRowRender={record =><div className={""}>
                            <p> Arquero: {record.namearquero} | Nacimiento: {record.arquerodate} | Número: {record.numberarquero}  </p>
                            <p> Defensa: {record.defensauno}  | Nacimiento: {record.defensaunodate} | Número:{record.numberdefensauno} </p>
                            <p> Defensa: {record.defensados}  | Nacimiento: {record.defensadosdate} | Número:{record.numberdefensados}</p>
                            <p> Defensa: {record.defensatres}  | Nacimiento: {record.defensatresdate} | Número:{record.numberdefensatres}</p>
                            <p> Defensa: {record.defensacuatro}  | Nacimiento: {record.defensacuatrodate} | Número:{record.numberdefensacuatro}</p>
                            <p> Medio: {record.mediouno}  | Nacimiento: {record.mediounodate} | Número:{record.numberdefensatres}</p>
                            <p> Medio: {record.mediodos}  | Nacimiento: {record.mediodosdate}  | Número:{record.numbermediodos}</p>
                            <p> Medio: {record.mediotres}  | Nacimiento: {record.mediotresdate} | Número:{record.numbermediotres}</p>
                            <p> Medio: {record.mediocuatro}  | Nacimiento: {record.mediocuatrodate}  | Número:{record.numbermediocuatro}</p>
                            <p> Delantero: {record.delanterouno}  | Nacimiento: {record.delanterounodate} |  Número:{record.numberdelanterouno}</p>
                            <p> Delantero: {record.delanterodos}  | Nacimiento: {record.delanterodosdate}| Número:{record.numberdelanterodos}</p>








                        </div>}

                    />
                </QueueAnim>



            </div>
        );
    }
}



export default ShowTable;