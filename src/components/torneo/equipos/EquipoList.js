import React from 'react';
import EquipoListRow from './EquipoListRow';
import './Equipos.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui';



const EquipoList = ({ingresos, deleteIngreso}) => (
   <div className="ingresos-home">
       <h2>Equipos Copa del rey</h2>

       <br/>

       <br/>

       <Table>
           <TableHeader>
               <TableRow>
                   <TableHeaderColumn>ID</TableHeaderColumn>
                   <TableHeaderColumn>Nombre</TableHeaderColumn>
                   <TableHeaderColumn>Logo-ruta</TableHeaderColumn>
               </TableRow>
           </TableHeader>
           <TableBody>
               {
                   ingresos.map( ingreso => {
                       return <EquipoListRow key={ingreso.key} ingreso={ingreso} />
                   })
               }
           </TableBody>
       </Table>

   </div>
);

export default EquipoList;
