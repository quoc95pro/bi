import React, { Component } from 'react'
import Chart from 'react-apexcharts'
class LineChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
          }
        }
      }
       
      render() {
        const getRandomInt = () => {
          const min = Math.ceil(10);
          const max = Math.floor(20);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        console.log(getRandomInt());
        
       let series= [{
          name: 'series-1',
          data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
        }]
        return (
          <Chart options={this.state.options} series={series} type={this.props.type}  />
        )
      }
}

export default LineChart;