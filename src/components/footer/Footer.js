import React, { Component } from 'react';
import './Footer.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';



{/*   <p> <SocialIcon className="icon" network="twitter" /> </p> */}
class Footer extends Component {
    render() {
        return (
            <div>


                <footer className="footer-distributed">

                    <div className="footer-right">


                        <p> Redes sociales</p>
                        <hr/>


                  <a href="https://www.facebook.com/Soccer-Master-178651229621468/"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com/appsoccermaster/"><i className="fa fa-instagram"></i></a>


                    </div>


                    <img className="logo-footer" src={logo} alt="logo"/>

                    <div className="footer-left">

                        <p className="footer-links">

                            <a href="#"></a>





                            ·
                            <Link to="/politicas">

                            <a href="#">Políticas de Privacidad</a>

                            </Link>
                            ·

                        </p>

                        <p>Soccer Master &copy; 2018</p>
                    </div>

                </footer>







            </div>
        );
    }
}

export default Footer;





