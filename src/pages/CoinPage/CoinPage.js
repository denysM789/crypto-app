import React from "react";

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
