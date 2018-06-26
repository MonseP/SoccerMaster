import React from 'react';
import './Equipos.css';
import {MenuItem, TextField, DatePicker} from "material-ui";





const EquipoForm = (props) => {


    console.log(props.equipo);
    let menuItems = [];
    if( props.equipo !== undefined){
        console.log(props.equipo.key);
    }else{
        props.equipo = {};
    }
    if ( typeof props.allTipos !== 'undefined') {
        menuItems = props.allTipos.map((tipo) => {
            const valor = tipo.value.toLowerCase();
            console.info(valor);
            return <MenuItem key={valor} primaryText={tipo.text} value={valor}/>
        })
    }
    const {equipo, onChange, onChangeTipo, onChangeDate, controlledDate} = props;
    console.log(equipo);





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
                value={equipo.nombre}
                onChange={onChange}
                type="text"
            />
            <TextField
                name="copas"
                floatingLabelText="Copas ganadas"
                value={equipo.copas}
                onChange={onChange}
                type="number"
            />
            <p>Logo del equipo</p>
                 <input
                  name="logo"
                value={equipo.logo}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />


            <hr className="line"/>
            <p>Ingresa a los jugadores</p>



            {/*   JUGADORES  */}
            <TextField
                name="arquero"

                value={equipo.arquero}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Arquero"
            />
            <TextField
                name="arqueronumero"

                value={equipo.arqueronumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="arquerofoto"
                value={equipo.arquerofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />
            {/* Laterales */}

            <TextField
                name="lateralIzquierdo"

                value={equipo.lateralIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Lateral izquierdo"
            />
            <TextField
                name="lIzquierdonumero"

                value={equipo.lIzquierdonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="lIzquierdofoto"
                value={equipo.lIzquierdofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="lateraliDerecho"

                value={equipo.lateraliDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Lateral derecho"
            />
            <TextField
                name="lDerechonumero"

                value={equipo.lDerechonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="lDerechofoto"
                value={equipo.lDerechofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            {/* defensas */}

            <TextField
                name="defensaUno"

                value={equipo.defensaUno}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Defensa"
            />
            <TextField
                name="defensaUnonumero"

                value={equipo.defensaUnonumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="defensaUnofoto"
                value={equipo.defensaUnofoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="defensaDos"

                value={equipo.defensaDos}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Defensa"
            />
            <TextField
                name="defensaDosnumero"

                value={equipo.defensaDosnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="defensaDosfoto"
                value={equipo.defensaDosfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />


            {/* medio centro */}

            <TextField
                name="medioDerecha"

                value={equipo.medioDerecha}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Medio"
            />
            <TextField
                name="medioDnumero"

                value={equipo.medioDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="medioDfoto"
                value={equipo.medioDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="medioIzquierdo"

                value={equipo.medioIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Medio"
            />
            <TextField
                name="medioInumero"

                value={equipo.medioInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="medioIfoto"
                value={equipo.medioIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />



            {/* interiores  */}


            <TextField
                name="interiorDerecho"

                value={equipo.interiorDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Interior Derecho"
            />
            <TextField
                name="interiorDnumero"

                value={equipo.interiorDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="interiorDfoto"
                value={equipo.interiorDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="interiorIzquierdo"

                value={equipo.interiorIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Interior derecho"
            />
            <TextField
                name="interiorInumero"

                value={equipo.interiorInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="interiorIfoto"
                value={equipo.interiorIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />


            {/* delantero  */}

            <TextField
                name="delanteroDerecho"

                value={equipo.delanteroDerecho}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Delantero derecho"
            />
            <TextField
                name="delanteroDnumero"

                value={equipo.delanteroDnumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="delanteroDfoto"
                value={equipo.delanteroDfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />

            <TextField
                name="delanteroIzquierdo"

                value={equipo.delanteroIzquierdo}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Delantero izquierdo"
            />
            <TextField
                name="delanteroInumero"

                value={equipo.delanteroInumero}
                onChange={onChange}
                type="number"
                hintText="Número de camiseta"
                floatingLabelText="12"
            />
            <input
                name="delanteroIfoto"
                value={equipo.delanteroIfoto}
                onChange={onChange}
                type="file"
                style={{margin: "10px 0"}}
            />



            {/* bancas  */}

            <TextField
                name="bancaUno"

                value={equipo.bancaUno}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Banca "
            />
            <TextField
                name="bancaDos"

                value={equipo.bancaDos}
                onChange={onChange}
                type="text"
                hintText="Nombre del jugador"
                floatingLabelText="Banca"
            />

            <TextField
                name="bancaTres"

                value={equipo.bancaTres}
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