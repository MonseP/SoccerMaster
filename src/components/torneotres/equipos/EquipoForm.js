import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FileUpload from './FileUpload';
import './Equipo.css';





class EquipoForm extends Component{





    render(){

        const {newItem} = this.props;
        return(
            <div className="formulario" >
                <div className={"formulario-dos"}>
                <DatePicker
                    autoOk={true}
                    value={newItem.fecha}
                    onChange={this.props.handleDate}
                    hintText="Fecha del registro" />

                <TextField
                    value={newItem.equiponame}
                    type="text"
                    name="equiponame"
                    hintText="Pachuca"
                    floatingLabelText="Nombre del equipo"
                    onChange={this.props.onChange}
                />
                <p> Logo</p>

                <FileUpload/>
                <hr className={"line-equipos"}/>

                <p>Agregar jugadores</p>

            <div className={"formulario-tres"}>
                {/* arquero*/}
                                <TextField
                                    value={newItem.namearquero}
                                    type="text"
                                    name="namearquero"
                                    hintText="Juan Pérez"
                                    floatingLabelText="Nombre del Arquero"
                                    onChange={this.props.onChange}
                                    />
                                    <TextField
                                        value={newItem.numberarquero}
                                        type="number"
                                        name="numberarquero"
                                        hintText="1"
                                        floatingLabelText="Número del Arquero"
                                        onChange={this.props.onChange}
                                    />

                                <TextField
                                    value={newItem.arquerodate}
                                    type="date"
                                    name="arquerodate"
                                    floatingLabelText="Fecha de Nacimiento"
                                    onChange={this.props.onChange}
                                />



                    <FileUpload/>

                <hr className={"line-equipos"}/>

                {/* defensas 4*/}

                        <p>Defensas</p>

                {/* defensa 1*/}
                                    <TextField
                                        value={newItem.defensauno}
                                        type="text"
                                        name="defensauno"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Defensa"
                                        onChange={this.props.onChange}
                                    />
                                        <TextField
                                            value={newItem.numberdefensauno}
                                            type="number"
                                            name="numberdefensauno"
                                            hintText="1"
                                            floatingLabelText="Número del Defensa"
                                            onChange={this.props.onChange}
                                        />
                                    <TextField
                                        value={newItem.defensaunodate}
                                        type="date"
                                        name="defensaunodate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                        <FileUpload/>

                {/* defensa 2*/}


                                        <TextField
                                            value={newItem.defensados}
                                            type="text"
                                            name="defensados"
                                            hintText="Juan Pérez"
                                            floatingLabelText="Nombre del Defensa"
                                            onChange={this.props.onChange}
                                        />
                                            <TextField
                                                value={newItem.numberdefensados}
                                                type="number"
                                                name="numberdefensados"
                                                hintText="1"
                                                floatingLabelText="Número del Defensa"
                                                onChange={this.props.onChange}
                                            />
                                        <TextField
                                            value={newItem.defensadosdate}
                                            type="date"
                                            name="defensadosdate"
                                            floatingLabelText="Fecha de Nacimiento"
                                            onChange={this.props.onChange}
                                        />
                                        <FileUpload/>

                {/* defensa 3*/}

                                    <TextField
                                        value={newItem.defensatres}
                                        type="text"
                                        name="defensatres"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Defensa"
                                        onChange={this.props.onChange}
                                    />
                                <TextField
                                    value={newItem.numberdefensatres}
                                    type="number"
                                    name="numberdefensatres"
                                    hintText="1"
                                    floatingLabelText="Número del Defensa"
                                    onChange={this.props.onChange}
                                />
                                    <TextField
                                        value={newItem.defensatresdate}
                                        type="date"
                                        name="defensatresdate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                    <FileUpload/>

                {/* defensa 4*/}

                                    <TextField
                                        value={newItem.defensacuatro}
                                        type="text"
                                        name="defensacuatro"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Defensa"
                                        onChange={this.props.onChange}
                                    />

                                    <TextField
                                        value={newItem.numberdefensacuatro}
                                        type="number"
                                        name="numberdefensacuatro"
                                        hintText="1"
                                        floatingLabelText="Número del Defensa"
                                        onChange={this.props.onChange}
                                    />
                                                        <TextField
                                        value={newItem.defensacuatrodate}
                                        type="date"
                                        name="defensacuatrodate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                    <FileUpload/>
                <hr className={"line-equipos"}/>
                {/* medios 4*/}
                                        <p>Medios</p>


                {/* medio 1*/}

                                    <TextField
                                        value={newItem.mediouno}
                                        type="text"
                                        name="mediouno"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Medio"
                                        onChange={this.props.onChange}
                                    />

                                        <TextField
                                            value={newItem.numbermediouno}
                                            type="number"
                                            name="numbermediouno"
                                            hintText="1"
                                            floatingLabelText="Número del Medio"
                                            onChange={this.props.onChange}
                                        />


                                    <TextField
                                        value={newItem.mediounodate}
                                        type="date"
                                        name="mediounodate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                    <FileUpload/>

                {/*medio dos*/}


                                <TextField
                                    value={newItem.mediodos}
                                    type="text"
                                    name="mediodos"
                                    hintText="Juan Pérez"
                                    floatingLabelText="Nombre del Medio"
                                    onChange={this.props.onChange}
                                />

                                    <TextField
                                        value={newItem.numbermediodos}
                                        type="number"
                                        name="numbermediodos"
                                        hintText="1"
                                        floatingLabelText="Número del Medio"
                                        onChange={this.props.onChange}
                                    />
                                <TextField
                                    value={newItem.mediodosdate}
                                    type="date"
                                    name="mediodosdate"
                                    floatingLabelText="Fecha de Nacimiento"
                                    onChange={this.props.onChange}
                                />
                                <FileUpload/>


                {/*Medio tres*/}


                                    <TextField
                                        value={newItem.mediotres}
                                        type="text"
                                        name="mediodos"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Medio"
                                        onChange={this.props.onChange}
                                    />

                                    <TextField
                                        value={newItem.numbermediotres}
                                        type="number"
                                        name="numbermediotres"
                                        hintText="1"
                                        floatingLabelText="Número del Medio"
                                        onChange={this.props.onChange}
                                    />


                                    <TextField
                                        value={newItem.mediotresdate}
                                        type="date"
                                        name="mediotresdate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                 <FileUpload/>

                {/*medio cuatro*/}

                                    <TextField
                                        value={newItem.mediocuatro}
                                        type="text"
                                        name="mediocuatro"
                                        hintText="Juan Pérez"
                                        floatingLabelText="Nombre del Medio"
                                        onChange={this.props.onChange}
                                    />
                                    <TextField
                                        value={newItem.numbermediocuatro}
                                        type="number"
                                        name="numbermediocuatro"
                                        hintText="1"
                                        floatingLabelText="Número del Medio"
                                        onChange={this.props.onChange}
                                    />

                                    <TextField
                                        value={newItem.mediocuatrodate}
                                        type="date"
                                        name="mediocuatrodate"
                                        floatingLabelText="Fecha de Nacimiento"
                                        onChange={this.props.onChange}
                                    />
                                    <FileUpload/>
                <hr className={"line-equipos"}/>
                                    <p>Delanteros</p>

                {/*delantero uno*/}

                                        <TextField
                                            value={newItem.delanterouno}
                                            type="text"
                                            name="delanterouno"
                                            hintText="Juan Pérez"
                                            floatingLabelText="Nombre del Delantero"
                                            onChange={this.props.onChange}
                                        />

                                        <TextField
                                            value={newItem.numberdelanterouno}
                                            type="number"
                                            name="numberdelanterouno"
                                            hintText="1"
                                            floatingLabelText="Número del delantero"
                                            onChange={this.props.onChange}
                                        />

                                        <TextField
                                            value={newItem.delanterounodate}
                                            type="date"
                                            name="delanterounodate"
                                            floatingLabelText="Fecha de Nacimiento"
                                            onChange={this.props.onChange}
                                        />
                                        <FileUpload/>

                {/*delantero dos*/}


                <div  className={"formulario-dos"} >

                                        <TextField
                                            value={newItem.delanterodos}
                                            type="text"
                                            name="delanterodos"
                                            hintText="Juan Pérez"
                                            floatingLabelText="Nombre del Delantero"
                                            onChange={this.props.onChange}
                                        />


                                        <TextField
                                            value={newItem.numberdelanterodos}
                                            type="number"
                                            name="numberdelanterodos"
                                            hintText="1"
                                            floatingLabelText="Número del delantero"
                                            onChange={this.props.onChange}
                                        />


                                        <TextField
                                            value={newItem.delanterodosdate}
                                            type="date"
                                            name="delanterodosdate"
                                            floatingLabelText="Fecha de Nacimiento"
                                            onChange={this.props.onChange}
                                        />
                                        <FileUpload/>

                </div>









                                                    </div>
                                                     </div>
                                                            </div>
        );
    }
}

export default EquipoForm;