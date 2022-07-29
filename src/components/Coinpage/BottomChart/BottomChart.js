import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { ChartWrapper } from "./BottomChart.styles";

import useWindowSize from "hooks/useWindowSize";

const BottomChart = (props) => {
  const [chart, setChart] = useState();
  const { width: screenwidth } = useWindowSize();

  const getCoinData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${props.coinId.coinId}/market_chart?vs_currency=usd&days=${props.activeDuration}&interval=daily`
      );
      setChart(data?.prices);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoinData();
  }, [props.activeDuration]);

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
    <div>
      <ChartWrapper width={screenwidth}>
        <Line
          data={{
            labels: dataLabels,
            datasets: [
              {
                label: "Price",
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                borderColor: "rgba(44, 47, 54, 1)",
                fill: true,
                color: "#2550ea",
                showLine: true,
                data: chart?.map((el) => el[1]),
                pointRadius: 3,
                pointHoverBackgroundColor: "#00ff5f",
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
              tooltip: {
                enabled: true,
                usePointStyle: true,
                backgroundColor: "rgba(0, 0, 0, 0)",
                displayColors: false,
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
                  display: false,
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
      </ChartWrapper>
    </div>
  );
};

export default BottomChart;
