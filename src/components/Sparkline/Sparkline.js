import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Sparkline = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const getBitcoinData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      const chartData = data.prices.map((el) => el[1]);
      const chartLabels = data.prices.map((el) => new Date(el[0]).getDate());
      setChartData(chartData);
      setChartLabels(chartLabels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBitcoinData();
  }, []);

  return (
    <Line
      data={{
        labels: chartLabels,
        datasets: [
          {
            label: "BTC",
            backgroundColor: "#2550ea",
            borderColor: "#2550ea",
            color: "#2550ea",
            showLine: true,
            data: chartData,
            pointRadius: 0,
          },
        ],
      }}
      height={200}
      width={150}
      options={{
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: { display: false, beginAtZero: true, maxTicksLimit: 5 },
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
              drawBorder: false,
            },
            ticks: {
              align: "start",
              source: "auto",
              autoSkip: true,
              maxRotation: 0,
              maxTicksLimit: 7,
              font: {
                size: 9,
              },
            },
          },
        },
      }}
    />
  );
};

export default Sparkline;
