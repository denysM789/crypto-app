import React from "react";
import DurationSelector from "../DurationSelector/DurationSelector";
import axios from "axios";

const BottomChart = (props) => {
  //getCoinData = async () => {};

  const durations = [
    {
      length: "1d",
      isActive: true,
    },
    {
      length: "7d",
      isActive: false,
    },
    {
      length: "30d",
      isActive: false,
    },
    {
      length: "90d",
      isActive: false,
    },
    {
      length: "1y",
      isActive: false,
    },
    {
      length: "Max",
      isActive: false,
    },
  ];
  return (
    <div>
      <DurationSelector durations={durations} />
    </div>
  );
};

export default BottomChart;
