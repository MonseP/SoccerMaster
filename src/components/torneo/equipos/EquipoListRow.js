import React from 'react';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui';
import {Link} from 'react-router-dom';

const EquipoListRow = ({ingreso}) => (
    <TableRow key={ingreso.key}>
        <TableRowColumn>
            <Link to={"/equipos-rey/"+ingreso.key}>
                {ingreso.key}
            </Link>
            </TableRowColumn>
        <TableRowColumn>{ingreso.nombre}</TableRowColumn>
        <TableRowColumn>{ingreso.logo}</TableRowColumn>
    </TableRow>
);

export default EquipoListRow;