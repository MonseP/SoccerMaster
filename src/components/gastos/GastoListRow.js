import React from 'react';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui';
import {Link} from 'react-router-dom';

const GastoListRow = ({gasto}) => (
    <TableRow key={gasto.key}>
        <TableRowColumn>
            <Link to={"/gastos/"+gasto.key}>
                {gasto.key}
            </Link>
            </TableRowColumn>
        <TableRowColumn>$ {gasto.cantidad}</TableRowColumn>
        <TableRowColumn>{gasto.description}</TableRowColumn>
    </TableRow>
);

export default GastoListRow;
