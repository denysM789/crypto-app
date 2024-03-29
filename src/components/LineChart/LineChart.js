import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Wrapper } from "./LineChart.styles";
import { getBitcoinData } from "store/coinOverview/actions";
import { useSelector, useDispatch } from "react-redux";

const LineChart = () => {
  const chart = useSelector((state) => state.lineChart.bitcoinPrices);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBitcoinData());
  }, []);

  const dataLabels = chart?.prices.map((el) => {
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
    <Wrapper>
      <Line
        data={{
          labels: dataLabels,
          datasets: [
            {
              label: "BTC",
              backgroundColor: "rgba(0,0,255,0.3)",
              borderColor: "#2550ea",
              fill: true,
              color: "#2550ea",
              showLine: true,
              data: chart.prices.map((el) => el[1]),
              pointRadius: 0,
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
          interaction: {
            mode: "index",
            intersect: false,
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
                callback: function (value, index) {
                  return dataLabels[index].slice(3, 5);
                },
              },
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default LineChart;
