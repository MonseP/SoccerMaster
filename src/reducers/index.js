import {combineReducers} from 'redux';
import ingresoReducer from './ingresoReducer';
import  equiposReducer from './equiposReducer';
import tipoReducer from './tipoReducer';
import gastoReducer from "./gastoReducer";
import usuarioReducer from "./usuarioReducer";
import navBarNameReducer from './navBarNameReducer';


const rootReducer = combineReducers({
    ingresos: ingresoReducer,
    equipos: equiposReducer,
    tipos: tipoReducer,
    gastos:gastoReducer,
    usuario: usuarioReducer,
    navBarName: navBarNameReducer
});

export default rootReducer;
