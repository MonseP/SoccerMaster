import React from 'react';
import {ListItem, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import {FontIcon,Card,CardHeader,CardText} from 'material-ui';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

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
        <div>
            <h2 style={titleStyle}>{props.title}</h2>
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                    <TableHeaderColumn>Nombre</TableHeaderColumn>
                    <TableHeaderColumn>Descripcion</TableHeaderColumn>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        props.data.map( gasto => {
                            if(gasto.label === 'key'){
                                return null;
                            }
                        
                            const label = FirstLetterInMayus(gasto.label);
                            return (
                                <TableRow key={gasto.label}>
                                    <TableRowColumn>{label}</TableRowColumn>
                                    <TableRowColumn>{gasto.value}</TableRowColumn>
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
