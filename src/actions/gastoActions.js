import firebase from '../firebase';

export function createGasto(gasto){
    return {type: "CREATE_GASTO", gasto}
}

export function loadGastosSuccess(gastos){
    return {type: "LOAD_GASTOS_SUCCESS", gastos}
}

export function createGastoSuccess(gasto){
    return {type: "SAVE_NEW_GASTO_SUCCESS", gasto}
}

export function updateGastoSuccess(gasto){
    return { type: "UPDATE_GASTO_SUCCESS", gasto };
}

export function deleteGastoSuccess(gasto) {
    return { type: "DELETE_GASTO_SUCCESS", gasto };
}


export function loadGastos(){
    return function (dispatch) {
        return firebase.database().ref('gastos')
            .once('value')
            .then(s => {
                let array = [];
                for (let k in s.val()){
                    let c = s.val()[k];
                    c['key'] = k;
                    array.push(c);
                }
                dispatch(loadGastosSuccess(array));
            }).catch(error =>{
                throw(error);
            });
    };
}


export function saveGasto(gasto){
    return function (dispatch, getState){
        if(gasto.key){
            let updates = {};
            updates['/gastos/' + gasto.key] = gasto;
            return firebase.database().ref().update(updates)
                .then(()=>{
                    return dispatch(updateGastoSuccess(gasto));
                });
        }else{
            return firebase.database().ref('gastos/')
                .push(gasto)
                .then(s =>{

                    gasto['key'] = s.key;
                    return dispatch(createGastoSuccess(gasto));
                })
                .catch(error => {
                    throw(error);
                });
        }


    };
}


export function deleteGasto(gasto) {
    return function (dispatch, getState) {
        debugger;
        let updates = {};
        updates['/gastos/' + gasto.key] = null;
        return firebase.database().ref().update(updates)
            .then(r=>{
                dispatch(deleteGastoSuccess(gasto));
                console.log(r);
            }).catch(e=>{
                console.log(e)
            });

    }
}
