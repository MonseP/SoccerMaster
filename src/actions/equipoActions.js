import firebase from '../firebase';

export function createEquipo(equipo){
    return {type: "CREATE_EQUIPO", equipo}
}

export function loadEquipoSuccess(equipos){
    return {type: "LOAD_EQUIPO_SUCCESS", equipos}
}

export function createEquipoSuccess(equipo){
    return { type: "SAVE_NEW_EQUIPO_SUCCESS", equipo };
}

export function updateEquipoSuccess(equipo){
    return { type: "UPDATE_EQUIPO_SUCCESS", equipo };
}

export function deleteEquipoSuccess(equipo) {
    return { type: "DELETE_EQUIPO_SUCCESS", equipo };
}


export function loadEquipos(){
    return function(dispatch){

        return firebase.database().ref('torneodos/equipos')
            .once('value')
            .then(s => {
                let array = [];
                for (let k in s.val()){
                    let c = s.val()[k];
                    //console.log(s.val()[k]);
                    c['key'] = k;
                    array.push(c);
                }
                dispatch(loadEquipoSuccess(array));
            }).catch(error =>{
                throw(error);
            });
    };
}

export function saveEquipo(equipo){
    return function (dispatch, getState){
        // Despachamos la accion para el loader
        //dispatch(beginAjaxCall());
        if(equipo.key){
            let updates = {};
            updates['/equipos/' + equipo.key] = equipo;
            return firebase.database().ref().update(updates)
                .then(()=>{
                    //console.log('chet');
                    return dispatch(updateEquipoSuccess(equipo));
                });
        }else{
            return firebase.database().ref('torneodos/equipos')
                .push(equipo)
                .then(s =>{
                    //console.log(s.key);

                    equipo['key'] = s.key;
                    //console.log('nuevo chet');
                    return dispatch(createEquipoSuccess(equipo));
                })
                .catch(error => {
                    //dispatch(ajaxCallError());
                    throw(error);
                });
        }


    };
}

export function deleteEquipo(equipo) {
    return function (dispatch, getState) {
        debugger;
        let updates = {};
        updates['torneodos/equipos/' + equipo.key] = null;
        return firebase.database().ref().update(updates)
            .then(r=>{
                dispatch(deleteEquipoSuccess(equipo));
                console.log(r);
            }).catch(e=>{
                console.log(e)
            });

    }
}

