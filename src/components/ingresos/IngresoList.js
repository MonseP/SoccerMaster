import React from 'react';
import IngresoListRow from './IngresoListRow';
import './Ingresos.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui';



const IngresoList = ({ingresos, deleteIngreso}) => (
   <div className="ingresos-home">
       <h2>Ingresos</h2>

       <br/>

       <br/>

       <Table>
           <TableHeader>
               <TableRow>
                   <TableHeaderColumn>ID</TableHeaderColumn>
                   <TableHeaderColumn>Cantidad</TableHeaderColumn>
                   <TableHeaderColumn>Descripción</TableHeaderColumn>
               </TableRow>
           </TableHeader>
           <TableBody>
               {
                   ingresos.map( ingreso => {
                       return <IngresoListRow key={ingreso.key} ingreso={ingreso} />
                   })
               }
           </TableBody>
       </Table>

   </div>
);

export default IngresoList;
