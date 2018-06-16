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
import TableContainer2 from "./components/torneo/TableContainer2";
import TableContainer3 from "./components/torneodos/TableContainer3";
import PrivateRoute from "./PrivateRoute";




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



        {/* Aquí empieza Torneos rutas */}
        <PrivateRoute path="/torneo-rey" component={TableContainer2} />
        <PrivateRoute path="/torneo-america" component={TableContainer3} />
        <Route exact path="/equipos-rey" component={Equipos} />
        <PrivateRoute path="/equipos-rey/:key" component={ManageEquipoPage} />

        <Route exact path="/equiposamerica" component={Equipo} />
        <PrivateRoute path="/equiposamerica/:key" component={Dos} />





        {/* Aquí empieza equipos rutas */}













        <Route render={() => <h1> Se está construyendo  </h1>  } />





    </Switch>
);

export default Routes
