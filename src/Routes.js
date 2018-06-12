import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import HomeService from './components/home/HomeService';
import Ingresos from './components/ingresos/IngresoContainer';
import Gastos from './components/gastos/GastosContainer';
import Caja from './components/caja/TableContainer';
import Cliente from './components/cliente/TableCliente';
import Resumen from './components/resumen/Resumen';
import ManageIngresoPage from './components/ingresos/ManageIngresoPage';
import ManageGastoPage from './components/gastos/ManageGastoPage';

//rutas sistemas

import Politicas from "./components/footer/Politicas";
import LoginContainer from "./components/login/LoginContainer";
import SignUpContainer from "./components/signup/SignUpContainer";
import TorneoHome from "./components/torneos/TorneoHome";
import TableContainer2 from "./components/torneo/TableContainer2";
import TableContainer3 from "./components/torneodos/TableContainer3";
import PrivateRoute from "./PrivateRoute";




//equipos rutas
import EquiposContainer from './components/torneo/equipos/EquiposContainer';









const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/servicios" component={HomeService} />
        <PrivateRoute exact path="/ingresos" component={Ingresos} />
        <PrivateRoute exact path="/gastos" component={Gastos} />
        <PrivateRoute path="/gastos/:key" component={ManageGastoPage} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <PrivateRoute path="/caja" component={Caja} />
        <PrivateRoute path="/resumen" component={Resumen} />
        <PrivateRoute path="/ingresos/:key" component={ManageIngresoPage} />
         <PrivateRoute path="/clientes" component={Cliente} />
        <PrivateRoute path="/torneos" component={TorneoHome} />
        <Route path="/politicas" component={Politicas} />

        {/* Aquí empieza Torneos rutas */}
        <PrivateRoute path="/torneo-rey" component={TableContainer2} />
        <PrivateRoute path="/torneo-america" component={TableContainer3} />





        {/* Aquí empieza equipos rutas */}

        <Route path="/equipos-rey" component={EquiposContainer} />


        <Route render={() => <h1> Se está construyendo  </h1>  } />




    </Switch>
);

export default Routes
