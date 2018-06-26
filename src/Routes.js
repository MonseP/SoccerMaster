import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Caja from './components/caja/TableContainer';
import Cliente from './components/cliente/TableCliente';
import Resumen from './components/resumen/Resumen';



//rutas sistemas

import Politicas from "./components/footer/Politicas";
import LoginContainer from "./components/login/LoginContainer";
import SignUpContainer from "./components/signup/SignUpContainer";
import TorneoHome from "./components/torneos/TorneoHome";
import TableContainer1 from "./components/torneo/TableContainer1";
import TableContainer2 from "./components/torneodos/TableContainer2";
import TableContainer3 from "./components/torneotres/TableContainer3";
import TableContainer4 from "./components/torneocuatro/TableContainer4";
import TableContainer5 from "./components/torneocinco/TableContainer5";
import TableContainer6 from "./components/torneoseis/TableContainer6";
import TableContainer7 from "./components/torneosiete/TableContainer7";
import TableContainer8 from "./components/torneoocho/TableContainer8";
import TableContainer9 from "./components/torneonueve/TableContainer9";

import PrivateRoute from "./PrivateRoute";
import  DocumentHome from "./components/document/MyApp";







//equipos rutas

import Equipos from './components/torneo/equipos/EquipoContainer';
import ManageEquipoPage from './components/torneo/equipos/ManageEquipoPage';

import Equipo from './components/torneodos/equipos/EquipoContainer';
import Dos from './components/torneodos/equipos/ManageEquipoPage';












const Routes = () => (
    <Switch>
        <Route exact path="/" component={LoginContainer} />


         <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <PrivateRoute path="/caja" component={Caja} />
        <PrivateRoute path="/resumen" component={Resumen} />
        <PrivateRoute path="/clientes" component={Cliente} />
        <PrivateRoute path="/torneos" component={TorneoHome} />
        <Route path="/politicas" component={Politicas} />
        <Route path="/pdf" component={DocumentHome} />




        {/* Aquí empieza Torneos rutas */}
        <PrivateRoute path="/torneo-rey" component={TableContainer1} />
        <PrivateRoute path="/torneo-america" component={TableContainer2} />
        <PrivateRoute path="/torneo-oro" component={TableContainer3} />
        <PrivateRoute path="/torneo-liber" component={TableContainer4} />
        <PrivateRoute path="/torneo-afri" component={TableContainer5} />
        <PrivateRoute path="/torneo-arge" component={TableContainer6} />
        <PrivateRoute path="/torneo-confe" component={TableContainer7} />
        <PrivateRoute path="/torneo-sud" component={TableContainer8} />
        <PrivateRoute path="/torneo-fem" component={TableContainer9} />


        <PrivateRoute  exact path="/equipos-rey" component={Equipos} />
        <PrivateRoute path="/equipos-rey/:key" component={ManageEquipoPage} />

        <PrivateRoute exact path="/equiposamerica" component={Equipo} />
        <PrivateRoute path="/equiposamerica/:key" component={Dos} />





        {/* Aquí empieza equipos rutas */}













        <Route render={() => <h1> Se está construyendo  </h1>  } />





    </Switch>
);

export default Routes
