import React, {Component} from 'react';
import { Modal, Icon} from 'antd';
import './Equipo.css';



class Aviso extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>

                <button   className='aviso' onClick={this.showModal} > Aviso </button>

                <Modal
                    title="Instrucciones"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Entendido"
                    cancelText="Cancelar"

                >
                    <p>1.-Los jugadores <Icon type="smile-o" /> se podrán mostrar cuando se despliegue el botón de <Icon type="plus" /> . </p>
                    <p>2.-Las imagenes  <Icon type="picture" /> que se subirán tendrán que tener la nomenclarura correspondiente: </p>
                    <p>Ejemplo: arquerofoto, si son más de dos para distinguirlas se colocará defensaunofoto, defensadosfoto y así sucesivamente <Icon type="upload" /> .</p>
                    <p>El nombre de los jugadores debe de ser completo por ejemplo: Juan Pérez Ruiz</p>
                </Modal>
            </div>
        );
    }
}

export default Aviso;