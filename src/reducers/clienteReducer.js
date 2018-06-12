import initialState from './initialState';

export default function cajaReducer(state = [], action){
  switch(action.type){

    case "LOAD_CLIENTE_SUCCESS":
        return action.cliente;
        break;


    case "SAVE_NEW_CLIENTE_SUCCESS":
        return [...state,
            Object.assign({},action.cliente)
        ];

        case "CREATE_CLIENTE":
            return [...state,
            Object.assign({}, action.cliente)
            ];

            case "UPDATE_CLIENTE_SUCCESS":
                return state;
            default:
                return state;

}
}
