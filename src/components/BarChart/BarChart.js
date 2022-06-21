import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement } from "chart.js/auto";

const BarChart = () => {
  const [chart, setChart] = useState();

  const getBitcoinData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily"
      );
      const dates = data.total_volumes;

      setChart(dates);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBitcoinData();
  }, []);

  const dataLabels = chart?.map((el) => {
    const date = new Date(el[0]);
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    if (day.length === 1) {
      day = "0" + day;
    }
    if (month.length === 1) {
      month = "0" + month;
    }
    return `${month}-${day}-${date.getFullYear()}`;
  });

  return (
    <Bar
      data={{
        labels: dataLabels,
        datasets: [
          {
            label: "Volume 24h",
            backgroundColor: "#1ad761",
            data: chart?.map((el) => el[1]),
          },
        ],
      }}
      height={200}
      width={150}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { display: false },
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
          x: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              callback: function (value, index) {
                return dataLabels[index].slice(3, 5);
              },
              autoSkip: true,
              maxTicksLimit: 15,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
