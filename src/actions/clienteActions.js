import firebase from '../firebase';

export function createCliente(cliente){
    return {type: "CREATE_CLIENTE", cliente}
}

export function loadClienteSuccess(cliente){
    return {type: "LOAD_CLIENTE_SUCCESS", cliente}
}

export function createClienteSuccess(cliente){
    return { type: "SAVE_NEW_CLIENTE_SUCCESS", cliente };
}

export function updateClienteSuccess(cliente){
    return { type: "UPDATE_CLIENTE_SUCCESS", cliente };
}

export function loadCliente(){
    return function(dispatch){

        return firebase.database().ref('clientes')
            .once('value')
            .then(s => {
                let array = [];
                for (let k in s.val()){
                    let c = s.val()[k];
                    //console.log(s.val()[k]);
                    c['key'] = k;
                    array.push(c);
                }
                dispatch(loadClienteuccess(array));
            }).catch(error =>{
                throw(error);
            });
    };
}

export function saveCliente(cliente){
    return function (dispatch, getState){
         if(cliente.key){
            let updates = {};
            updates['/clientes/' + cliente.key] = cliente;
            return firebase.database().ref().update(updates)
                .then(()=>{

                    return dispatch(updateClienteSuccess(cliente));
                });
        }else{
            return firebase.database().ref('clientes/')
                .push(cliente)
                .then(s =>{


                    cliente['key'] = s.key;

                    return dispatch(createClienteSuccess(cliente));
                })
                .catch(error => {

                    throw(error);
                });
        }


    };
}
