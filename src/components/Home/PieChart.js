import { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({error, isPending, posts}) => {

  const [dataToChart, setDataToChart] = useState({});

  useEffect(() => {
    let labelsList = [];
    let datasList = [];

  const fetchdata = () => {
    if (posts) {
        for(let post of posts){
        labelsList.push(post.title);
        datasList.push(post.count);
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
  },[posts]);

  return (
        <div className="pie">
           <div className='header' style={{textAlign: 'center'}}>
            <h3 className='title'>Doughnut Chart</h3>
          </div>
        { error && <div>{ error }</div> }
        { isPending && <div className="center-align">
            <h3>Loading...</h3>
        </div> }
          {posts && <Doughnut data={dataToChart}  
          options={{
          responsive: true,
          maintainAspectRatio: true,
          legend:{
            display: true,
            position: "right"
          }
        }}/>}
        </div>
    );
}

export default PieChart;
