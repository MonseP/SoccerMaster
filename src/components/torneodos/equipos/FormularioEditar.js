import React from 'react';
import {TextField} from 'material-ui';
import './Equipos.css';

const FormularioEditar = (props) => {
    console.log(props.equipo);
    return (
        <div className="formulario-tres">
            <form>
                {props.data.map((equipo) => {
                    if(equipo.label === 'key'){
                        return null;
                    }
                    return <TextField
                        style={textFieldStyle}
                        key={equipo.label}
                        floatingLabelText={equipo.label}
                        name={equipo.label}
                        value={props.equipo[equipo.label]}
                        onChange={props.onChange}
                    />
                })}
            </form>
        </div>
    );
};

const textFieldStyle = {
    margin:'10px 20px'
};

export default FormularioEditar;