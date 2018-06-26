import React from "react";
import ReactToPrint from "react-to-print";
import  './Document.css';
import carnet from './carnete.jpg';

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div>

                <img className="carnete" src={carnet} alt="logo"/>
            </div>
        );
    }
}

class Example extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#" className={"print"}>¡Imprimir ahora!</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}


export default Example;

