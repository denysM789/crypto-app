import React from "react";
import { Line } from "react-chartjs-2";

const Sparkline = ({ data, last7d }) => {
  const prices = data?.price.map((el) => el);
  const labels = [...Array(data.price.length).keys()];
  const borderColor = last7d && last7d >= 0 ? "#00FF5F" : "#FE1040";

  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: "BTC",
            backgroundColor: "x191B1F",
            borderColor: borderColor,
            fill: false,
            showLine: true,
            pointRadius: 0,
            data: prices,
          },
        ],
      }}
      height={70}
      width={200}
      options={{
        interaction: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "index",
          intersect: false,
        },
        responsive: false,
        maintainAspectRatio: false,
        aspectRatio: 2,
        title: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 0,
            rotation: 1,
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
};

export default Sparkline;
