import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';





class EquiposForm extends Component{


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
                    hintText="Pachuca"
                    floatingLabelText="Nombre del equipo"
                    onChange={this.props.onChange}
                />
                
                <TextField
                    value={newItem.copas}
                    multiLine={true}
                    rows={1}
                    type="number"
                    name="copas"
                    hintText="10 copas"
                    floatingLabelText="Copas ganadas "
                    onChange={this.props.onChange}
                />



            </div>
        );
    }
}

export default EquiposForm;