import React from 'react';
import logo from '../../assets/diente.png';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './Home.css';
import video from '../../assets/video.mp4';
import { Parallax } from 'react-scroll-parallax';


export const SlideDisplay = () => {

    return (
        <div className="slide">
                <div className="home_data">
                    <img id="bot" src={logo} alt=""/>
                    <h3 className="bot">Happy Smile</h3>
                    <hr className="line_white right"/>
                    <p className="bot">Disfruta sonreir</p>
                    <br/>
                    <a href="#history">
                    <FontAwesome  className="fa_home top" name="chevron-down" />
                    </a>
                </div>
                <video id='bg-video' autoPlay="autoplay" loop muted >
                    <source src={video} type="video/mp4" />
                </video>
        </div>
);
}
