
import React, { Component } from 'react';
import './Home.css';
import HomeDisplay from './HomeDisplay';
import Footer from '../footer/Footer';

class Home extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="todo-home">
                <HomeDisplay />
                <Footer/>

            </div>
        );
    }
}

export default Home;
