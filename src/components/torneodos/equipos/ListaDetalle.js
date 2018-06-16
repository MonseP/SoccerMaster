import React from 'react';
import {ListItem, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import './Equipos.css';

const iconStyles = {
    marginRight: 0
};

const titleStyle = {
  display: 'inline'
};

function FirstLetterInMayus(string){
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ListaDetalle = (props) => {

    return (
        <div className="formulario-dos">
            <h2 style={titleStyle}>{props.title}</h2>
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                    <TableHeaderColumn>Descripción</TableHeaderColumn>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        props.data.map(equipo => {
                            if(equipo.label === 'key'){
                                return null;
                            }
                            //return<ListItem key={ingreso.label}>{ingreso.label} : {ingreso.value}</ListItem>
                            const label = FirstLetterInMayus(equipo.label);
                            return (
                                <TableRow key={equipo.label}>
                                    <TableRowColumn>{label}</TableRowColumn>
                                    <TableRowColumn>{equipo.value}</TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>

            </Table>


        </div>
    );
};

export default ListaDetalle;