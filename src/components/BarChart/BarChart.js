import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Wrapper } from "./BarChart.styles";
import { getBitcoinData } from "store/coinOverview/actions";
import { useSelector, useDispatch } from "react-redux";

const BarChart = () => {
  const chart = useSelector((state) => state.barChartReducer.bitcoinVolumes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBitcoinData());
  }, []);

  const dataLabels = chart?.total_volumes.map((el) => {
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
      <Bar
        data={{
          labels: dataLabels,
          datasets: [
            {
              label: "Volume 24h",
              backgroundColor: "#00ff5f",
              data: chart.total_volumes.map((el) => el[1]),
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
    </Wrapper>
  );
};

export default BarChart;
