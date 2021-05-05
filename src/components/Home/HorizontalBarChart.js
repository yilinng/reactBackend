import { useState, useEffect } from "react";
import { HorizontalBar } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}


const HorizontalBarChart = ({orders}) => {

  const [dataToChart, setDataToChart] = useState({});

  useEffect(() => {
    let labelsList = [];
    let datasList = [];

  const fetchdata = () => {
    if (orders) {
        for(let order of orders){
        labelsList.push(order.title);
        datasList.push(order.count);
      };
    }
  };

    setDataToChart({
      labels: labelsList,
      datasets: [{
      label: 'count',
      data: datasList,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      }]
    });
    fetchdata();
  },[orders]);

  return (
    <div className='horizontal'>
      {orders && <HorizontalBar data={dataToChart} options={options}/>}
    </div>
  );

}

export default HorizontalBarChart;
