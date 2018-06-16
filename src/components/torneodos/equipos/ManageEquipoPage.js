
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as equipoActions from '../../../actions/equipoActions';
import ListaDetalle from "./ListaDetalle";
import { FlatButton, FloatingActionButton} from 'material-ui';
import toastr from 'toastr';
import FormularioEditar from "./FormularioEditar";
import ContentRemove from 'material-ui/svg-icons/action/delete-forever';

const buttonStyle = {
    margin: '20px 0px'
};

class ManageEquipoPage extends React.Component {

    state = {
        edit: false,
        equipo:  {},
        errors:{}
    };


    deleteItem = () => {
        debugger;
        const response = window.confirm('¿Está seguro?');
        if(response){
            const equipoForRemoving = Object.assign({},this.props.equipo);
            this.props.actions.deleteEquipo(equipoForRemoving)
                .then( r => {
                    toastr.success('Se ha eliminado');
                    this.props.history.push('/equiposamerica');
                }).catch( e => {
                    console.log(e);
            });
        }

    };

    editEquipo = () => {
        const equipoCopy = Object.assign({},this.state.equipo);
        this.props.actions.saveEquipo(equipoCopy)
            .then( (r) => {
                toastr.success('Guardado');
                console.log(r);
            }).catch(e=>console.error(e));
        this.closeForm();
    };

    openForm = () => {
        // this.setState({openForm:true});
        const equipo = Object.assign({},this.props.equipo);
        this.setState({edit:true, equipo}, () => {
            console.log(this.state.equipo);
        } );
    };

    closeForm = () => {
        // this.setState({openForm:false});
        this.setState({edit:false});
    };


    handleChangeTipo = (event, index, value) => {
        let equipo = Object.assign({}, this.state.equipo);
        equipo.tipo = value;
        this.setState({equipo});
    };

    updateEquipoState = (e) => {
        const field = e.target.name;
        let equipo = Object.assign({}, this.state.equipo);
        equipo[field] = e.target.value;
        this.setState({equipo});
    };


    render() {
        const {edit} = this.state;
        let equipoToPrint = [];

        const equipo = this.props.equipo;
        for (let field in equipo) {
            let newEquipo = {};
            newEquipo.value = equipo[field];
            newEquipo.label = field;
            equipoToPrint.push(newEquipo);
        }

        return (
            <div style={{width:'70vw'}}>
                { (!edit)
                    ?<ListaDetalle
                        title="Detalle Ingreso"
                        data={equipoToPrint}/>
                    :< FormularioEditar
                        data={equipoToPrint}
                        equipo={this.state.equipo}
                        onChange={this.updateEquipoState}
                        onChangleTipo={this.handleChangeTipo}/>
                }
                { !edit
                    ?
                    <div>
                        <FlatButton
                            label="Editar"
                            primary={true}
                            onClick={this.openForm}
                            style={buttonStyle}
                        />
                        <FlatButton
                            label="Regresar"
                            primary={true}
                            onClick={()=>this.props.history.push('/equiposamerica')}
                            style={buttonStyle}
                        />
                    </div>
                    :
                    <div>
                        <FlatButton
                            label="Guardar Cambios"
                            primary={true}
                            onClick={this.editEquipo}
                            style={buttonStyle}
                        />
                        <FlatButton
                            label="Cancelar"
                            primary={true}
                            onClick={this.closeForm}
                            style={buttonStyle}
                        />
                    </div>
                }

                <FloatingActionButton
                    style={fabstyle}
                    onClick={this.deleteItem}>
                    <ContentRemove/>
                </FloatingActionButton>


            </div>
        );
    }
}


const fabstyle = {
    position:'fixed',
    right: 15,
    bottom: 15
};

function mapStateToProps(state, ownProps) {
    console.log(state.equipos);

    debugger;
    const equipoIsolated = state.equipos.filter( (equipo) => {
        if (equipo !== undefined){
            return equipo.key === ownProps.match.params.key;
        }

    });

    const equipo = equipoIsolated[0];
    const tiposFormattedForDropdown = state.tipos.map(tipo=>{
        return {
            value:tipo.value,
            text:tipo.text
        }
    });

    return {
        equipo: equipo,
        tipos: tiposFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(equipoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEquipoPage);