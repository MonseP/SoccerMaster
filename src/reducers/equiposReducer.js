import initialState from './initialState';

export default function equiposReducer(state = [], action){
    switch(action.type){
        case "LOAD_EQUIPO_SUCCESS":
            return action.equipos;
            break;
        case "SAVE_NEW_EQUIPO_SUCCESS":
            return [...state,
                Object.assign({},action.equipo)
            ];
        case "CREATE_EQUIPO":
            //state.push(action.ingreso);
            //return state;
            return [...state,
                Object.assign({}, action.equipo)
            ];
        case "UPDATE_EQUIPO_SUCCESS":
            return [...state.map( i => {
                if(i.key === action.equipo.key){
                    return action.equipo;
                }
                return i;
            } )];

        // case "LOAD_TIPOS_SUCCESS":
        //     return action.tipos;
        case "DELETE_EQUIPO_SUCCESS":
            return [...state.filter( i =>
                i.key !== action.equipo.key
            )];
        default:
            return state;
    }
}