import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import  './Torneo.css';





class TorneoForm extends Component{


    render(){

        const {newItem} = this.props;
        return(
            <div className="Form-ingreso">
                <div className={"formulario-torneo"}>
                <DatePicker
                    autoOk={true}
                    value={newItem.fecha}
                    onChange={this.props.handleDate}
                    hintText="Fecha del registro" />

                <TextField
                    value={newItem.names}
                    type="text"
                    name="names"
                    hintText="Jornada Uno"
                    floatingLabelText="Número de la Jornada"
                    onChange={this.props.onChange}
                />

                <hr className={"linea-torneo"}/>
                <p>Partidos</p>
                    <div className={"formulario-torneo-dos"}>

                        <TextField
                            value={newItem.partidouno}
                            multiLine={true}
                            rows={4}
                            type="text"
                            name="partidouno"
                            hintText="Partido Uno"
                            floatingLabelText=
                                "Pachuca vs América
                         22 de Julio a las 7 p.m.
                         Árbitro: Montserrat Plata Torres

                    "
                            onChange={this.props.onChange}
                        />

                <TextField
                    value={newItem.partidodos}
                    multiLine={true}
                    rows={4}
                    type="text"
                    name="partidodos"
                    hintText="Partido Dos"
                    floatingLabelText=
                        "Pachuca vs América
                         22 de Julio a las 7 p.m.
                         Árbitro: Montserrat Plata Torres

                    "
                    onChange={this.props.onChange}
                />
                        <TextField
                            value={newItem.partidotres}
                            multiLine={true}
                            rows={4}
                            type="text"
                            name="partidotres"
                            hintText="Partido Tres"
                            floatingLabelText=
                                "Pachuca vs América
                         22 de Julio a las 7 p.m.
                         Árbitro: Montserrat Plata Torres

                    "
                            onChange={this.props.onChange}
                        />
                        <TextField
                            value={newItem.partidocuatro}
                            multiLine={true}
                            rows={4}
                            type="text"
                            name="partidocuatro"
                            hintText="Partido Cuatro"
                            floatingLabelText=
                                "Pachuca vs América
                         22 de Julio a las 7 p.m.
                         Árbitro: Montserrat Plata Torres

                    "
                            onChange={this.props.onChange}
                        />
                         <div className={"formulario-torneo-dos"}>
                        <TextField
                            value={newItem.partidocinco}
                            multiLine={true}
                            rows={4}
                            type="text"
                            name="partidocinco"

                            hintText="Partido Cinco"

                            floatingLabelText=
                                "Pachuca vs América
                         22 de Julio a las 7 p.m.
                         Árbitro: Montserrat Plata Torres

                    "
                            onChange={this.props.onChange}
                        />

                         </div>

                     </div>


                </div>


            </div>
        );
    }
}

export default TorneoForm;