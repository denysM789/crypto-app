import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./BottomChart.styles";
import { getCoinData } from "store/bottomChart/actions";
import { useSelector, useDispatch } from "react-redux";
import useWindowSize from "hooks/useWindowSize";

const BottomChart = (props) => {
  const { width: screenwidth } = useWindowSize();

  const { data: chart, isLoading } = useSelector((state) => state.bottomChart);

  const dispatch = useDispatch();

  const hasCoinData = Object.keys(chart.prices).length !== 0;
  const hasData = hasCoinData && !isLoading;

  useEffect(() => {
    dispatch(getCoinData(props.coinId.coinId, props.activeDuration));
  }, [props.activeDuration]);

  const dataLabels = chart.prices.map((el) => {
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
      {hasData && (
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
                  data: chart.prices.map((el) => el[1]),
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
                  ticks: {
                    display: false,
                    beginAtZero: true,
                    maxTicksLimit: 5,
                  },
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
      )}
    </div>
  );
};

export default BottomChart;
