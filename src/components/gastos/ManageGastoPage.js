
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gastoActions from '../../actions/gastoActions';
import ListaDetalle from "./ListaDetalle";
import { FlatButton, FloatingActionButton} from 'material-ui';
import toastr from 'toastr';
import FormularioEditar from "./FormularioEditar";
import ContentRemove from 'material-ui/svg-icons/action/delete-forever';

const buttonStyle = {
    margin: '20px 0px'
};

class ManageGastoPage extends React.Component {

    state = {
        edit: false,
        gasto:  {},
        errors:{}
    };


    deleteItem = () => {
        debugger;
        const response = window.confirm('Seguro');
        if(response){
            const gastoForRemoving = Object.assign({},this.props.gasto);
            this.props.actions.deleteGasto(gastoForRemoving)
                .then( r => {
                    toastr.success('Se ha eliminado');
                    this.props.history.push('/gastos');
                }).catch( e => {
                    console.log(e);
            });
        }

    };

    editGasto = () => {
        const gastoCopy = Object.assign({},this.state.gasto);
        this.props.actions.saveGasto(gastoCopy)
            .then( (r) => {
                toastr.success('Guardado');
                console.log(r);
            }).catch(e=>console.error(e));
        this.closeForm();
    };

    openForm = () => {
        // this.setState({openForm:true});
        const gasto = Object.assign({},this.props.gasto);
        this.setState({edit:true, gasto}, () => {
            console.log(this.state.gasto);
        } );
    };

    closeForm = () => {
        // this.setState({openForm:false});
        this.setState({edit:false});
    };


    handleChangeTipo = (event, index, value) => {
        let gasto = Object.assign({}, this.state.gasto);
        gasto.tipo = value;
        this.setState({gasto});
    };

    updateGastoState = (e) => {
        const field = e.target.name;
        let gasto = Object.assign({}, this.state.gasto);
        gasto[field] = e.target.value;
        this.setState({gasto});
    };


    render() {
        const {edit} = this.state;
        let gastoToPrint = [];

        const gasto = this.props.gasto;
        for (let field in gasto) {
            let newGasto = {};
            newGasto.value = gasto[field];
            newGasto.label = field;
          gastoToPrint.push(newGasto);
        }

        return (
            <div style={{width:'70vw'}}>
                { (!edit)
                    ?<ListaDetalle
                        title="Detalle gasto"
                        data={gastoToPrint}/>
                    :< FormularioEditar
                        data={gastoToPrint}
                        gasto={this.state.gasto}
                        onChange={this.updateGastoState}
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
                            onClick={()=>this.props.history.push('/gastos')}
                            style={buttonStyle}
                        />
                    </div>
                    :
                    <div>
                        <FlatButton
                            label="Guardar Cambios"
                            primary={true}
                            onClick={this.editGasto}
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


                {/*<FlatButton*/}
                    {/*label="Eliminar"*/}
                    {/*primary={true}*/}
                    {/*onClick={this.deleteItem}/>*/}

                {/*<Dialog*/}
                    {/*contentStyle={{width:350}}*/}
                    {/*title="Editar Ingreso"*/}
                    {/*actions={this.actions}*/}
                    {/*modal={false}*/}
                    {/*open={this.state.openForm}*/}
                    {/*onRequestClose={this.closeForm}>*/}
                    {/*<IngresoForm*/}
                        {/*ingreso={this.state.ingresoMutable}*/}
                        {/*allTipos={this.props.tipos}*/}
                        {/*onChange={this.updateIngresoState}*/}
                        {/*onChangeTipo={this.handleChangeTipo}*/}
                    {/*/>*/}

                {/*</Dialog>*/}
            </div>
        );
    }
}

//ManageIngresoPage.propTypes = {
    // myProp: PropTypes.string.isRequired
//};

const fabstyle = {
    position:'fixed',
    right: 15,
    bottom: 15
};

function mapStateToProps(state, ownProps) {
    console.log(state.gastos);

    debugger;
    const gastoIsolated = state.gastos.filter( (gasto) => {
        if (gasto !== undefined){
            return gasto.key === ownProps.match.params.key;
        }

    });

    const gasto = gastoIsolated[0];
    const tiposFormattedForDropdown = state.tipos.map(tipo=>{
        return {
            value:tipo.value,
            text:tipo.text
        }
    });

    return {
        gasto: gasto,
        tipos: tiposFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gastoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageGastoPage);
