import React from 'react';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';
import logo_azul from '../../assets/logo_prana_azul.png';
import log_g from '../../assets/diente.png';
import conse from '../../assets/consejo.jpg';

import {Link} from 'react-router-dom';

export const HistoryDisplay = () => {

    return (
        <div id="history" className="history">
            <div className="parallax" style={{width:"80%", margin: "50px auto"}}>


            <div className="" style={{display:"flex"}}>
                <Parallax
                    className="custom-class"
                    offsetXMax={40}
                    offsetXMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="coffe_img" src={conse} alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetXMax={-70}
                    offsetxMin={40}
                    slowerScrollRate
                    tag="figure"
                >


                    <div className="card_history">
                        <h3>Happy Smile</h3>

                        <br />
                        <p>Somos expertos en diseñar tu mejor sonrisa con la mejor tecnología.
                        </p>
                        <br />
                        <p>Comienza el día con una sonrisa, verás lo divertido que es ir por ahí desentonando con todo el mundo (MAFALDA de Quino).</p>

                        <br/>

                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <div className="card_history">

                        <p>
                          Somos promotores de los mejores tratamientos bucales
                        </p>
                        <p>
                        Estándares de calidad establecidos basados en normas oficiales Mexicanas relacionadas con servicios dentales para los consultorios dentales.

                        </p>
                        <br/>
                        <span className="floti">Saber más...</span>
                    </div>
                </Parallax>


            </div>

        </div>
      </div>

    );
}
