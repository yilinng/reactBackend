import { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
//import useFetch from "./../../useFetch";

/*
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
    },
  ],
}
*/


const PieChart = ({error, isPending, posts}) => {

  const [dataToChart, setDataToChart] = useState({});

  //const { error, isPending, data: posts } = useFetch('http://localhost:4000/posts')

  useEffect(() => {
    let labelsList = [];
    let datasList = [];

  const fetchdata = () => {
    if (posts) {
        for(let post of posts){
        labelsList.push(post.color);
        datasList.push(post.count);
      };
    }
  };

    setDataToChart({
      labels: labelsList,
      datasets: [{
      label: '# of Votes',
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
        <div className="pie col s6"
        style={{
                border: '1px solid rgba(0, 0, 0, 0.05)',
                marginTop: '3%'
              }}>
           <div className='header' style={{textAlign: 'center'}}>
            <h3 className='title'>Doughnut Chart</h3>
          </div>
        { error && <div>{ error }</div> }
        { isPending && <div className="center-align">
            <h3>Loading...</h3>
        </div> }
          {posts && <Doughnut data={dataToChart}/>}
        </div>
    );
}

export default PieChart;
