import React from "react";
import { Input, Wrapper } from "./Searchbar.styles";

class Searchbar extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <img src="https://crypto-tracker-five-delta.vercel.app/static/media/search.62b80724.svg" />
        <Input
          value={this.state.value}
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default Searchbar;
