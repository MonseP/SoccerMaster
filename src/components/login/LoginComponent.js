import React from 'react';
import {TextField,RaisedButton} from 'material-ui';
import {NavLink} from "react-router-dom";

const styleButton = {
    margin: '30px 0px 10px 40px ',
    display: 'block'
};

const textFieldStyle = {
    display: 'block',
    margin: '5px 0px',
    color:'white',


};

const formStyle = {
    width: '33vw',
    textAlign: 'center',
    backgroundColor:'white',


};

const pStyle = {
    fontSize: '14px',
    display: 'inline'
};

const navStyle = {
    fontSize: '14px',
    display: 'inline'
};

const LoginComponent = (props) => {
    console.log(props.usuario);
    return (
        <div className={"login"}>

            <h2>Inicia Sesión</h2>
        <form
            onSubmit={props.onSubmit}
            style={formStyle}>
            <TextField
                style={{margin:'35px'}}
                name="email"
                required
                floatingLabelText="Email"
                value={props.usuario.email}
                onChange={props.onChange}
                type="email"
                fullWidth={true}
            />
            <TextField
                style={{margin:'35px'}}
                name="password"
                required
                floatingLabelText="Contraseña"
                value={props.usuario.password}
                onChange={props.onChange}
                type="password"
                fullWidth={true}
            />


            <RaisedButton
                label="Entrar"
                primary={true}
                style={styleButton}
                type="submit"
                fullWidth={true}
            />
        
        </form>

        </div>
    );
};

export default LoginComponent;
