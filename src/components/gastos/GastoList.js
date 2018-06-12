import React from 'react';
import GastoListRow from './GastoListRow';
import './Gastos.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui';



const GastoList = ({gastos, deleteGasto}) => (
   <div className='gastos'>
       <h2>Gastos</h2>

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
                   gastos.map( gasto => {
                       return <GastoListRow key={gasto.key} gasto={gasto} />
                   })
               }
           </TableBody>
       </Table>

   </div>
);

export default GastoList;
