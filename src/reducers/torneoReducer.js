import initialState from './initialState';

export default function torneoReducer(state = [], action){
    switch(action.type){

        case "LOAD_TORNEO_SUCCESS":
            return action.torneo;
            break;


        case "SAVE_NEW_TORNEO_SUCCESS":
            return [...state,
                Object.assign({},action.torneo)
            ];

        case "CREATE_TORNEO":
            return [...state,
                Object.assign({}, action.torneo)
            ];

        case "UPDATE_TORNEO_SUCCESS":
            return state;
        default:
            return state;

    }
}