import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
// import './ColumnChart.css';

function ColumnChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const chart = new ApexCharts(chartRef.current, {
        chart: {
          type: 'bar',
          height: '500px',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
          },
          column: {
            width: '80%',
            offsetX: '-10%'
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [ {
            name: "Projects",
            data: [287, 385, 490, 492, 554, 586, 698, 695,777,600,560,670]
          },
          {
            name: "Customers",
            data: [67, 152, 143, 240, 287, 335, 435, 437,300,789,429,440]
          }],
        xaxis: {
          categories: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ]
        },
       
        legend: {
          show: true
        }
      });

      chart.render();
    }
  }, [data]);

  return (
    <div className="column-chart" ref={chartRef}></div>
  );
}

export default ColumnChart;
