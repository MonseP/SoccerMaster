import React, {Component} from 'react';
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom';
import './Torneo.css';

class TorneoUno extends Component {



    render() {
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

                            <Link to={"/torneo-oro"}>

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


                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa libertadores </h1>

                            <Link to={"/torneo-liber"}>

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


                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa Africana </h1>

                            <Link to={"/torneo-afri"}>

                                <figure className="snip0015">
                                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    />
                                    <figcaption>
                                        <h2>Sábados Juvenil </h2>
                                        <h2>SUB 16</h2>

                                    </figcaption>
                                </figure>


                            </Link>




                        </Card>
                    </Col>


                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa Argentina </h1>

                            <Link to={"/torneo-arge"}>

                                <figure className="snip0015">
                                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    />
                                    <figcaption>
                                        <h2>Sábados Juvenil </h2>
                                        <h2>SUB 22</h2>

                                    </figcaption>
                                </figure>


                            </Link>




                        </Card>
                    </Col>

                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Confederaciones </h1>

                            <Link to={"/torneo-confe"}>

                                <figure className="snip0015">
                                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    />
                                    <figcaption>
                                        <h2>Sábados </h2>
                                        <h2>Categoría Libre</h2>

                                    </figcaption>
                                </figure>


                            </Link>




                        </Card>
                    </Col>


                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa SudAmericana </h1>

                            <Link to={"/torneo-sud"}>

                                <figure className="snip0015">
                                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    />
                                    <figcaption>
                                        <h2>Domingos</h2>


                                    </figcaption>
                                </figure>


                            </Link>




                        </Card>
                    </Col>

                    <Col span={8}  style={{ backgroundColor:'transparent', borderColor:'none', marginTop:'10px'}} >
                        <Card   style={{ backgroundColor:'#e9ecea'}} >
                            <h1 className={"titulo-imagen"}> Copa Femenil </h1>

                            <Link to={"/torneo-fem"}>

                                <figure className="snip0015">
                                    <img src="https://images.pexels.com/photos/209861/pexels-photo-209861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                    />
                                    <figcaption>
                                        <h2>Domingos</h2>


                                    </figcaption>
                                </figure>


                            </Link>




                        </Card>
                    </Col>





                </Row>






            </div>

        </div>





        );
    }
}

export default TorneoUno;