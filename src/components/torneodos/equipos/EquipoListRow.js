import React from 'react';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui';
import {Link} from 'react-router-dom';

const EquipoListRow = ({equipo}) => (
    <TableRow key={equipo.key}>
        <TableRowColumn>
            <Link to={"/equiposamerica/"+equipo.key}>
                {equipo.key}
            </Link>
            </TableRowColumn>
        <TableRowColumn>{equipo.nombre}</TableRowColumn>
        <TableRowColumn>{equipo.logo}</TableRowColumn>
    </TableRow>
);

export default EquipoListRow;