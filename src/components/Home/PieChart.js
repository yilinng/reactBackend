import { useState, useEffect } from "react";
import { Chart, Doughnut } from 'react-chartjs-2';

const PieChart = ({posts}) => {

  const [dataToChart, setDataToChart] = useState({});
  //total count
  const mostCount = posts.reduce((arr, curr) => {
    return arr + curr.count
  }, 0);
  //Make a number a percentage
  const percent = 100*(posts[0].count/mostCount).toFixed(2) + '%'
  //console.log(mostCount,percent);
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

    Chart.pluginService.register({
      beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
          // Get ctx from string
          var ctx = chart.chart.ctx;

          // Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Arial';
          var txt = centerConfig.text;
          var color = centerConfig.color || '#000';
          var maxFontSize = centerConfig.maxFontSize || 75;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          // Start with a base font of 30px
          ctx.font = "30px " + fontStyle;

          // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
          var minFontSize = centerConfig.minFontSize;
          var lineHeight = centerConfig.lineHeight || 25;
          var wrapText = false;

          if (minFontSize === undefined) {
            minFontSize = 20;
          }

          if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
          }

          // Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
          }

          var words = txt.split(' ');
          var line = '';
          var lines = [];

          // Break words up into multiple lines if necessary
          for (let n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
              lines.push(line);
              line = words[n] + ' ';
            } else {
              line = testLine;
            }
          }

          // Move the center up depending on line height and number of lines
          centerY -= (lines.length / 2) * lineHeight;

          for (let n = 0; n < lines.length; n++) {
            ctx.fillText(lines[n], centerX, centerY);
            centerY += lineHeight;
          }
          //Draw text in center
          ctx.fillText(line, centerX, centerY);
        }
      }
    });
  },[posts]);

  return (
        <div className="pie">
          {posts.length ? (
           <> 
          <Doughnut data={dataToChart}  
          options={{
          responsive: true,
          legend:{
            display: true,
            position: "right"
          },
          elements: {
            center: {
              text: percent,
              color: '#FF6384', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20, // Default is 20 (as a percentage)
              minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
          }
        }}/>
        </>
        ):(
        <div>no posts</div>
        )
        }
        </div>
    );
}

export default PieChart;
