import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {MenuItem} from 'material-ui';





class GoleadorForm extends Component{

    state = {
        otro:false,
        lista:[],
        subtipo:{
            Copa_del_Rey: [],
            Copa_America: [],
            Copa_Oro: [],
            Copa_Libertadores: [],
            Copa_Africana: [],
            Copa_Argentina: [],
            Confederaciones: [],
            Copa_Sudamericana: [],
            Femenil: [],



        }
    };

    handleTipo = (e, i, v) => {
        if(v==="otro"){
            this.setState({otro:true});
            return this.props.handleTipo(e,i,v);

        }
        this.setState({lista:this.state.subtipo[v], otro:false});
        this.props.handleTipo(e,i,v);
    };



    render(){


        const {otro} = this.state;

        const {newItem} = this.props;


        return(
            <div className="Form-ingreso">
                <DatePicker
                    autoOk={true}
                    value={newItem.fecha}
                    onChange={this.props.handleDate}
                    hintText="Fecha del partido" />

                <TextField
                    value={newItem.nombreplayer}
                    type="text"
                    name="nombreplayer"
                    hintText="Juan Plata Torres"
                    floatingLabelText="Nombre del jugador"
                    onChange={this.props.onChange}
                />
                <TextField
                    value={newItem.goles}
                    type="text"
                    name="goles"
                    hintText="2 Goles"
                    floatingLabelText="Goles que metió"
                    onChange={this.props.onChange}
                />

                 <TextField
                    value={newItem.puntos}
                    type="text"
                    name="puntos"
                    hintText="10"
                    floatingLabelText="10 puntos"
                    onChange={this.props.onChange}
                />

                <br />
                <SelectField
                    value={newItem.tipo}
                    name="tipo"
                    floatingLabelText="Torneo en el que juega"
                    onChange={this.handleTipo}
                >
                    <MenuItem value={"Copa_del_Rey"} primaryText="Copa del Rey" />
                    <MenuItem value={"Copa_America"} primaryText="Copa America" />
                    <MenuItem value={"Copa_Oro"} primaryText="Copa Oro" />
                    <MenuItem value={"Copa_Libertadores"} primaryText="Copa Libertadores" />
                    <MenuItem value={"Copa_Africana"} primaryText="Copa Africana" />
                    <MenuItem value={"Copa_Argentina"} primaryText="Copa Argentina" />
                    <MenuItem value={"Confederaciones"} primaryText="Confederaciones" />
                    <MenuItem value={"Copa_Sudamericana"} primaryText="Copa Sudamericana" />
                    <MenuItem value={"Femenil"} primaryText="Femenil" />

                </SelectField>
                <br/>







            </div>
        );
    }
}

export default GoleadorForm;