import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';





class TorneoForm extends Component{


    render(){



        const {newItem} = this.props;


        return(
            <div className="Form-ingreso">
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




                <TextField
                    value={newItem.description}
                    multiLine={true}
                    rows={4}
                    type="text"
                    name="description"
                    hintText="Pachuca 2 - América 2"
                    floatingLabelText="Descripción de los partidos"
                    onChange={this.props.onChange}
                />





            </div>
        );
    }
}

export default TorneoForm;