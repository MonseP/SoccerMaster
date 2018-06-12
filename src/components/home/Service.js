import React from 'react';
import './Servi.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import miel from '../../assets/services/uno.jpg';
import miel2 from '../../assets/services/dos.jpg';
import miel3 from '../../assets/services/tres.jpg';
import miel4 from '../../assets/services/cuatro.jpg';
import miel5 from '../../assets/services/cinco.png';


export const Service = () => {


    return (

        <div style={{padding:"0 0 100px 0", border:"1px solid #f7f7f7"}}>
            <div className="miel">
                <div className="cover">
                    <div >
                        <h3>Happy Smile </h3>
                        <p> Nunca evites sonreir</p>
                    </div>
                </div>
            </div>
            <div className="miel_present">
                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"50px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure">
                        <img  className="miel_img" src={miel} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Brackets</h3>
                            <p>La ortodoncia con brackets de alta tecnología.
                                <br/>
                                <br/>
                                </p>
                                <p>
                                La ortodoncia convencional se vale del sistema de brackets para recolocar las piezas dentales.
                                Este tratamiento se utiliza en los casos en los que el paciente presenta los dientes malposicionados,
                                montados o sufre de maloclusión dental.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>
            <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                <Parallax
                    className="custom-class"
                    offsetYMax={60}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="miel_img" src={miel3} alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetYMax={-40}
                    offsetYMin={70}
                    slowerScrollRate
                    tag="figure"
                >
                    <div className="card_miel">
                        <h3>Prótesis dentales</h3>
                        <p>Buscamos que sean removibles si es tu mejor opción
                            <br/>
                            <br/>
                            Las prótesis dentales removibles o dentaduras postizas
                            reponen los dientes ausentes y las estructuras óseas que
                            se van reabsorbiendo a lo largo del tiempo tras la pérdida
                            de los dientes naturales. Mediante estos dispositivos protésicos,
                            se restablece la masticación, la deglución, el habla y la estética.
                            <br/>
                        </p>
                    </div>
                </Parallax>
            </div>
                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="miel_img" src={miel2} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Carillas dentales</h3>
                            <p>Tienen múltiples beneficios
                                <br/>
                                <br/>
                                Las carillas dentales buscan principalmente imitar el color de los demás dientes,
                                para dar un aspecto natural a tu sonrisa. Son sompatibles con el organismo.
                                Altamente estéticas.
                                Menor desgaste en la preparación del diente.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>

                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="miel_img" src={miel4} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Limpieza dental</h3>
                            <p>De preferencia se realiza una vez al año
                                <br/>
                                <br/>
                                Dentro de los principales beneficios de este
                                 procedimiento se destaca la utilidad para
                                  eliminar los restos e impurezas localizadas entre
                                  los dientes, que a través de un rutina de limpieza bucal d
                              iaria no se pueden erradicar.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>


                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="miel_img" src={miel5} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Si reservas tu paquete con tiempo te llevas un 15% de descuento</h3>
                            <p>Contamos con más servicios como
                                <br/>
                                <br/>
                              Endodoncia,Curaciones,Extracciones,
                              Blanquemiento dental.
                              Siempre con la calidad que te mereces.
                              <br/>
                              Llama y te atenderemos con mucho gusto.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>



        </div>
            <div style={{marginTop:"300px", textAlign:"center"}}>
              <Link to="/"> <button className="btn_explore">Regresar</button></Link>
            </div>
        </div>
    );
}
