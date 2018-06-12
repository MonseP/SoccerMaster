import firebase from '../firebase';

export function createTorneo(torneo){
    return {type: "CREATE_TORNEO", torneo}
}

export function loadTorneoSuccess(torneo){
    return {type: "LOAD_TORNEO_SUCCESS", torneo}
}

export function createTorneoSuccess(torneo){
    return { type: "SAVE_NEW_TORNEO_SUCCESS", torneo };
}

export function updateTorneoSuccess(torneo){
    return { type: "UPDATE_CAJA_SUCCESS", torneo };
}

export function loadTorneo(){
    return function(dispatch){

        return firebase.database().ref('torneo')
            .once('value')
            .then(s => {
                let array = [];
                for (let k in s.val()){
                    let c = s.val()[k];
                    //console.log(s.val()[k]);
                    c['key'] = k;
                    array.push(c);
                }
                dispatch(loadTorneoSuccess(array));
            }).catch(error =>{
                throw(error);
            });
    };
}

export function saveTorneo(torneo){
    return function (dispatch, getState){
        if(caja.key){
            let updates = {};
            updates['/torneo/' + torneo.key] = torneo;
            return firebase.database().ref().update(updates)
                .then(()=>{

                    return dispatch(updateCajaSuccess(torne));
                });
        }else{
            return firebase.database().ref('torneo/')
                .push(caja)
                .then(s =>{


                    caja['key'] = s.key;

                    return dispatch(createTorneoSuccess(torneo));
                })
                .catch(error => {

                    throw(error);
                });
        }


    };
}