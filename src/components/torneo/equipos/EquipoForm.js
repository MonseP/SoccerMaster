import React from 'react';
import './Equipos.css';
import {Form, Input, Upload, Icon, message,} from 'antd';
import {MenuItem, TextField, DatePicker} from "material-ui";
import Fotos from "./Fotos";
import FotosHome from "./FotosHome";







const EquipoForm = (props) => {





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

    const {ingreso, onChange, onChangeTipo, onChangeDate, controlledDate,} = props;
    console.log(ingreso);






    return (


<div className="formulario">

        <form  >


            <DatePicker
                hintText="Fecha de captura"
                value={controlledDate}
                onChange={onChangeDate}
            />


            <TextField
                name="nombre"
                floatingLabelText="Nombre"
                value={ingreso.nombre}
                onChange={onChange}
                type="text"
            />
            <TextField
                name="copas"
                floatingLabelText="Copas ganadas"
                value={ingreso.copas}
                onChange={onChange}
                type="number"
            />
            <p>Logo del equipo</p>

         <FotosHome/>


            <hr className="line"/>
            <p>Ingresa a los jugadores</p>



            {/*   JUGADORES  */}
            <TextField
                name="arquero"

                value={ingreso.arquero}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Arquero"
            />
            <TextField
                name="arqueronumero"

                value={ingreso.arqueronumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="arquerofoto"
                value={ingreso.arquerofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />
            {/* Laterales */}

            <TextField
                name="lateralIzquierdo"

                value={ingreso.lateralIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Lateral izquierdo"
            />
            <TextField
                name="lIzquierdonumero"

                value={ingreso.lIzquierdonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="lIzquierdofoto"
                value={ingreso.lIzquierdofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="lateraliDerecho"

                value={ingreso.lateraliDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Lateral derecho"
            />
            <TextField
                name="lDerechonumero"

                value={ingreso.lDerechonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="lDerechofoto"
                value={ingreso.lDerechofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            {/* defensas */}

            <TextField
                name="defensaUno"

                value={ingreso.defensaUno}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Defensa"
            />
            <TextField
                name="defensaUnonumero"

                value={ingreso.defensaUnonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="defensaUnofoto"
                value={ingreso.defensaUnofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="defensaDos"

                value={ingreso.defensaDos}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Defensa"
            />
            <TextField
                name="defensaDosnumero"

                value={ingreso.defensaDosnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="defensaDosfoto"
                value={ingreso.defensaDosfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />


            {/* medio centro */}

            <TextField
                name="medioDerecha"

                value={ingreso.medioDerecha}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Medio"
            />
            <TextField
                name="medioDnumero"

                value={ingreso.medioDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="medioDfoto"
                value={ingreso.medioDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="medioIzquierdo"

                value={ingreso.medioIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Medio"
            />
            <TextField
                name="medioInumero"

                value={ingreso.medioInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="medioIfoto"
                value={ingreso.medioIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />



            {/* interiores  */}


            <TextField
                name="interiorDerecho"

                value={ingreso.interiorDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Interior Derecho"
            />
            <TextField
                name="interiorDnumero"

                value={ingreso.interiorDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="interiorDfoto"
                value={ingreso.interiorDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="interiorIzquierdo"

                value={ingreso.interiorIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Interior derecho"
            />
            <TextField
                name="interiorInumero"

                value={ingreso.interiorInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="interiorIfoto"
                value={ingreso.interiorIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />


            {/* delantero  */}

            <TextField
                name="delanteroDerecho"

                value={ingreso.delanteroDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Delantero derecho"
            />
            <TextField
                name="delanteroDnumero"

                value={ingreso.delanteroDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="delanteroDfoto"
                value={ingreso.delanteroDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="delanteroIzquierdo"

                value={ingreso.delanteroIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Delantero izquierdo"
            />
            <TextField
                name="delanteroInumero"

                value={ingreso.delanteroInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="delanteroIfoto"
                value={ingreso.delanteroIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />



            {/* bancas  */}

            <TextField
                name="bancaUno"

                value={ingreso.bancaUno}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Banca "
            />
            <TextField
                name="bancaDos"

                value={ingreso.bancaDos}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Banca"
            />

            <TextField
                name="bancaTres"

                value={ingreso.bancaTres}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Banca"
            />












        </form>
</div>


);
};



//EquipoFormdos.propTypes = {};
EquipoForm.defaultProps = {
    textSubscribe: 'Actualizar'
};

export default EquipoForm;