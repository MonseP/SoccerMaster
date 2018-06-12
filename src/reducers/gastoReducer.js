import initialState from './initialState';

export default function gastoReducer(state = [], action){
    switch(action.type){
        case "LOAD_GASTOS_SUCCESS":
            return action.gastos;
            break;
        case "SAVE_NEW_GASTO_SUCCESS":
            return [...state,
                Object.assign({},action.gasto)
            ];
        case "CREATE_GASTO":
            //state.push(action.ingreso);
            //return state;
            return [...state,
            Object.assign({}, action.gasto)
            ];
        case "UPDATE_GASTO_SUCCESS":
            return [...state.map( i => {
                if(i.key === action.gasto.key){
                    return action.gasto;
                }
                return i;
            } )];

        // case "LOAD_TIPOS_SUCCESS":
        //     return action.tipos;
        case "DELETE_GASTO_SUCCESS":
            return [...state.filter( i =>
                i.key !== action.gasto.key
            )];
        default:
            return state;
    }
}
