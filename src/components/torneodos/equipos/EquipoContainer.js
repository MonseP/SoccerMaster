import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as equipoActions from '../../../actions/equipoActions';
import EquipoList from './EquipoList';
import {FloatingActionButton, Dialog, FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EquipoForm from './EquipoForm';
import toastr from 'toastr';


class EquipoContainer extends React.Component {
    state = {
        openForm: false,
        equipo: {
            nombre: '',
            copas: '',
            logo:'',
            captureDate: '',

        },
        controlledDate: {}
    };

    componentDidMount () {
        window.scroll(0, 0)

        }

    handleChangeTipo = (event, index, value) => {
        let equipo = Object.assign({}, this.state.equipo);
        equipo.tipo = value;
        this.setState({equipo});
    };

    handleChangeCaptureDate = (name, date) => {
        const equipo = this.state.equipo;
        equipo.captureDate = date.toString();
        this.setState({
            equipo,
            controlledDate: date
        });
    };

    updateEquipoState = (e) => {
        const field = e.target.name;
        let equipo = Object.assign({}, this.state.equipo);
        equipo[field] = e.target.value;
        this.setState({equipo});
    };

    saveItem = () => {
        debugger;
        const equipoCopy = Object.assign({},this.state.equipo);
        this.props.actions.saveEquipo(equipoCopy)
            .then( (r) => {
                toastr.success('Guardado');
                console.log(r);
                const newEquipo = {
                    nombre: '',
                    copas: '',
                    logo:'',
                    captureDate: '',
                };
                this.setState({equipo:newEquipo});
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
        const {equipos} = this.props;
        return (
            <div style={ingresoContainerStyle}>
                <EquipoList equipos={equipos} />
                <FloatingActionButton
                    style={fabstyle}
                    onClick={this.openForm}>
                    <ContentAdd/>
                </FloatingActionButton>
                <Dialog
                    contentStyle={{width:350}}
                    title="Agregar Ingreso"
                    actions={this.actions}
                    modal={false}
                    open={this.state.openForm}
                    onRequestClose={this.closeForm}>
                    <EquipoForm
                        equipo={this.state.equipo}
                        controlledDate={this.state.controlledDate}
                        allTipos={this.props.tipos}
                        onChange={this.updateEquipoState}
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

const ingresoContainerStyle = {
    width: '85vw'
};

EquipoContainer.propTypes = {
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
        equipos: state.equipos,
        tipos: tiposFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(equipoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipoContainer);