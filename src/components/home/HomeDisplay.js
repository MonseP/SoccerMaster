import React, { Component } from 'react';
import './Home.css';
import {PubliDisplay} from './PubliDisplay';
import sr from './scrollReveal.js';
import {SlideDisplay} from './SlideDisplay';
import {RevistaDisplay} from './RevistaDisplay';
import {HistoryDisplay} from './HistoryDisplay';





class HomeDisplay extends Component {
    componentDidMount () {
        window.scroll(0, 0)
        const config = {
            origin: 'right',
            duration: 2000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        const config2 = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config3 = {
            origin: 'bottom',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config4 = {
            origin: 'top',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.right', config2);
        sr.reveal('.left', config);
        sr.reveal('.bot', config3);
        sr.reveal('.top', config4);




    }
    render() {
    return (
            <div>
              <SlideDisplay />
              <RevistaDisplay/>
              <HistoryDisplay/>
              <PubliDisplay/>




            </div>
        );
    }
}

export default HomeDisplay;
