import React from 'react';
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom';
import './Torneo.css';

export const TorneoUno = () => {

    return (

        <div className={"torneohome"}  style={{ padding: '30px' , width:'1300px'}}>
            <div  className="catalogo-back" style={{ padding: '30px' , width:'900px'}}>
                <Row gutter={16} >
                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa del Rey </h1>

                            <Link to={"/torneo-rey"}>

                            <figure className="snip0015">
                                <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                     />
                                <figcaption>
                                    <h2>Lunes </h2>
                                    <h2>Liga premier</h2>

                                </figcaption>
                            </figure>


                            </Link>




                        </Card>
                    </Col>







                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa América </h1>
                            <Link to={"/torneo-america"}>

                            <figure className="snip0015">
                                <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                />
                                <figcaption>
                                    <h2>Martes </h2>
                                    <h2>Miércoles</h2>

                                </figcaption>
                            </figure>


                            </Link>


                        </Card>
                    </Col>




                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa de oro </h1>

                            <figure className="snip0015">
                                <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                />
                                <figcaption>
                                    <h2>Jueves  </h2>
                                    <h2>Viernes</h2>

                                </figcaption>
                            </figure>




                        </Card>
                    </Col>


                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa libertadores </h1>

                            <figure className="snip0015">
                                <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                />
                                <figcaption>
                                    <h2>Lunes-Viernes  </h2>
                                    <h2>6 p.m</h2>

                                </figcaption>
                            </figure>




                        </Card>
                    </Col>



                </Row>






            </div>

        </div>







    );
}
export default TorneoUno;