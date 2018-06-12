/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
//import TextInput from '../common/TextInput';
import {MenuItem, SelectField, TextField, DatePicker} from "material-ui";



const GastoForm = (props) => {
    console.log(props.gasto);
    let menuItems = [];
    if( props.gasto !== undefined){
        console.log(props.gasto.key);
    }else{
        props.gasto = {};
    }
    if ( typeof props.allTipos !== 'undefined') {
        menuItems = props.allTipos.map((tipo) => {
            const valor = tipo.value.toLowerCase();
            console.info(valor);
            return <MenuItem key={valor} primaryText={tipo.text} value={valor}/>
        })
    }
    const {gasto, onChange, onChangeTipo, onChangeDate, controlledDate} = props;
    console.log(gasto);

    return (
        <form >
            <TextField
                name="cantidad"
                floatingLabelText="Cantidad"
                value={gasto.cantidad}
                onChange={onChange}
                type="number"
            />
            <TextField
                name="description"
                floatingLabelText="Descripcion"
                value={gasto.description}
                onChange={onChange}
            />
            <TextField
                name="referencia"
                floatingLabelText="Referencia"
                value={gasto.referencia}
                onChange={onChange}
            />

            <TextField
                name="subtipo"
                floatingLabelText="Subtipo"
                value={gasto.subtipo}
                onChange={onChange}
            />

            <DatePicker
                hintText="Fecha de captura"
                value={controlledDate}
                onChange={onChangeDate}
            />
            <SelectField
                name="tipo"
                floatingLabelText="Tipo"
                value={gasto.tipo}
                onChange={onChangeTipo}>
                {menuItems}
            </SelectField>
        </form>
    );
};

//IngresoForm.propTypes = {};
GastoForm.defaultProps = {
    textSubscribe: 'Actualizar'
};

export default GastoForm;
