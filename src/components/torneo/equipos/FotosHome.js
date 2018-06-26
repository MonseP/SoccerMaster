import React, {Component} from 'react';
import firebase from 'firebase';
import './Fotos.css';
import {SocialIcon} from 'react-social-icons';
import toastr from 'toastr';
import Fotos from './Fotos';
import {NavLink} from 'react-router-dom';



class FotosHome extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            pictures: [],
            usuario: {
                email: '',
                password: ''
            }
        };


        this.handleUpload = this.handleUpload.bind(this);
    }



    handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`fotos/${file.name}`);
        const task = storageRef.put(file);

        // Listener que se ocupa del estado de la carga del fichero
        task.on('state_changed', snapshot => {
            // Calculamos el porcentaje de tamaño transferido y actualizamos
            // el estado del componente con el valor
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            // Ocurre un error
            console.error(error.message);
        }, () => {

            const record = {
                photoURL: this.state.user.photoURL,
                displayName: this.state.user.displayName,
                image: task.snapshot.downloadURL
            }
            const dbRef = firebase.database().ref('torneouno/equipos/pictures');
            const newPicture = dbRef.push();
            newPicture.set(record);
        });
    }

    renderLoginButton() {
        if (!this.state.user) {
            return (
                <div>

                </div>

            );
        } else {
            return (
                <div>



                    <br/>
                    <br/>

                    <div className="file">
                        <Fotos onUpload={this.handleUpload}/>


                        {
                            this.state.pictures.map(picture => (
                                <div className="App-card">
                                    <figure className="App-card-image">
                                        <img width="100" src={picture.image}/>
                                        <figCaption className="App-card-footer">
                                            <img className="App-card-avatar" src={picture.photoURL}
                                                 alt={picture.displayName}/>
                                            <span className="App-card-name">{picture.displayName}</span>
                                        </figCaption>
                                    </figure>
                                </div>
                            )).reverse()
                        }
                    </div>

                </div>

            );
        }
    }

    render() {
        const center = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80vh",
        };
        return (

            <div className="princi">


                <div className="App">
                    <div style={center}>
                        {this.renderLoginButton()}
                    </div>
                </div>

            </div>
        );
    }
}

export default FotosHome;