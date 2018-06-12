import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gastoActions from '../../actions/gastoActions';
import GastoList from './GastoList';
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import GastoForm from './GastoForm';
import toastr from 'toastr';


class GastoContainer extends React.Component {
    state = {
        openForm: false,
        gasto: {
            description: '',
            referencia: '',
            cantidad: '',
            tipo: '',
            captureDate: '',
            subtipo: ''
        },
        controlledDate: {}
    };

    handleChangeTipo = (event, index, value) => {
        let gasto = Object.assign({}, this.state.gasto);
        gasto.tipo = value;
        this.setState({gasto});
    };

    handleChangeCaptureDate = (name, date) => {
        const gasto = this.state.gasto;
        gasto.captureDate = date.toString();
        this.setState({
            gasto,
            controlledDate: date
        });
    };

    updateGastoState = (e) => {
        const field = e.target.name;
        let gasto = Object.assign({}, this.state.gasto);
        gasto[field] = e.target.value;
        this.setState({gasto});
    };

    saveItem = () => {
        debugger;
        const gastoCopy = Object.assign({},this.state.gasto);
        this.props.actions.saveGasto(gastoCopy)
            .then( (r) => {
                toastr.success('Guardado');
                console.log(r);
                const newGasto = {
                    description: '',
                        cantidad: '',
                        tipo: '',
                        captureDate: '',
                        referencia: '',
                        subtipo: ''
                };
                this.setState({gasto:newGasto});
            }).catch(e=>console.error(e));
        this.closeForm();
    };

    actions = [
        <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onClick={this.saveItem}
        />,
    ];

    openForm = () => {
        this.setState({openForm:true});
    };

    closeForm = () => {
        this.setState({openForm:false});
    };

    render() {
        const {gastos} = this.props;
        return (
            <div style={gastoContainerStyle}>
                <GastoList gastos={gastos} />
                <FloatingActionButton
                    style={fabstyle}
                    onClick={this.openForm}>
                    <ContentAdd/>
                </FloatingActionButton>
                <Dialog
                    contentStyle={{width:350}}
                    title="Agregar gasto"
                    actions={this.actions}
                    modal={false}
                    open={this.state.openForm}
                    onRequestClose={this.closeForm}>
                    <GastoForm
                        gasto={this.state.gasto}
                        controlledDate={this.state.controlledDate}
                        allTipos={this.props.tipos}
                        onChange={this.updateGastoState}
                        onChangeTipo={this.handleChangeTipo}
                        onChangeDate={this.handleChangeCaptureDate}
                    />

                </Dialog>
            </div>

        );
    }
}

const fabstyle = {
  position:'fixed',
  right: 15,
  bottom: 15
};

const gastoContainerStyle = {
    width: '85vw'
};

GastoContainer.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    const tiposFormattedForDropdown = state.tipos.map(tipo=>{
        return {
            value:tipo.value,
            text:tipo.text
        }
    });
    return {
        gastos: state.gastos,
        tipos: tiposFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gastoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GastoContainer);
