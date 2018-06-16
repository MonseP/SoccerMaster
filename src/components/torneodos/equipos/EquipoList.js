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



const EquipoList = ({equipos, deleteEquipo}) => (
   <div className="ingresos-home">
       <h2>Equipos Copa América</h2>

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
                   equipos.map( equipo => {
                       return <EquipoListRow key={equipo.key} equipo={equipo} />
                   })
               }
           </TableBody>
       </Table>

   </div>
);

export default EquipoList;
