import React from "react";
import axios from "axios";


class CoinPage extends React.Component {
  state = {
    isLoading: false,
    coinData: null,
    error: null,
  };

  getCoinData = async () => {
    this.setState({ isLoading: true });
  };

  render() {
    return <div></div>;
  }
}

export default CoinPage;
