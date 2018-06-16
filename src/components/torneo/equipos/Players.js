import React from 'react';
import './Equipos.css';
import {MenuItem, TextField, DatePicker} from "material-ui";




const Players = (props) => {


    console.log(props.ingreso);
    let menuItems = [];
    if( props.ingreso !== undefined){
        console.log(props.ingreso.key);
    }else{
        props.ingreso = {};
    }
    if ( typeof props.allTipos !== 'undefined') {
        menuItems = props.allTipos.map((tipo) => {
            const valor = tipo.value.toLowerCase();
            console.info(valor);
            return <MenuItem key={valor} primaryText={tipo.text} value={valor}/>
        })
    }
    const {ingreso, onChange, onChangeTipo, onChangeDate, controlledDate} = props;
    console.log(ingreso);





    return (


        <div className="formulario">




















        </div>


    );
};



//EquipoFormdos.propTypes = {};
Players.defaultProps = {
    textSubscribe: 'Actualizar'
};

export default Players;