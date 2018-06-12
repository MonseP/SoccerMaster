import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import { Card } from 'antd';
import './Resumen.css';

const data = {
    labels: ['Enero-Marzo', 'Abril-Junio', 'Julio-Septiembre', 'Octubre-Diciembre'],
    datasets: [
        {
            label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [200,100,250,50]

        }
    ]
};

class LineChartCard extends Component{
    render(){
        return(


            <Card className="card2" style={{width:500, maxHeight:500, textAlign:'center', padding:15}}>
                <div >
                    <h3>Flujo de efectivo</h3>
                    <p>Gráfica</p>
                </div>

                <Line
                    data={data}
                    width={100}
                    height={60}
                    options={{
                        maintainAspectRatio: true
                    }}
                />

            </Card>

        );
    }
}

export default LineChartCard;
