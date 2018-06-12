import React, {Component} from 'react';
import { Card } from 'antd';
import {Icon} from 'antd';
import {Bar, Pie} from 'react-chartjs-2';
import './Resumen.css';


const data = {
    labels: [
        'Efectivo',
        'Tarjeta',
        'Otro'
    ],
    datasets: [{
        data: [300, 50, 0],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class PieChartCard extends Component{
    render(){

        return(
            <Card className='card' style={{width:600, maxHeight:600, textAlign:'center', padding:5}}>
                <div>
                    <h3>Distribución de Pagos</h3>

                </div>
                <Pie
                    data={data}
                  className='pie'
                    options={{
                        maintainAspectRatio: true
                    }}
                />

            </Card>
        );
    }
};

export default PieChartCard;
