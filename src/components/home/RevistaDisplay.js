import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';

export const RevistaDisplay = () => {

    return (
        <div className="revista">
            <div className="rev_fl">
                <div className="box_rev ">
                    <div className="rev_img">
                    <img  className="revista-imagen" src="https://i.pinimg.com/originals/55/0d/e9/550de971646ce01031ae3241fe4bb7d2.png" alt=""/>
                    </div>
                </div>
                <div className="box_rev rev_text">
                    <h2 className="title">¿Por qué elegirnos?</h2>
                    <br/>
                    <p className="parrafo">Protegemos la calidad en el servicio a través de la afiliación de dentistas que cumplen con nuestros estándares de calidad  y especialización.


                    </p>
                            </div>



            </div>
            <div className="process">
                <div className="uno">
                    <FontAwesome name="credit-card" size="2x" />
                    <br/>
                    <h3 id="title1">Nos preocupamos por tu salud bucal</h3>
                    <p>Con menos de $1000 pesos inicias tu tratamiento</p>

                </div>

            </div>


        </div>
    );
}
