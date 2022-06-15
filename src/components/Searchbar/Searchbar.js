import React from "react";
import { StyledInput } from "./Searchbar.styles";
import { StyledForm } from "./Searchbar.styles";

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
      <div className="flex items-center">
        <StyledForm onSubmit={this.handleSubmit}>
          <img src="https://crypto-tracker-five-delta.vercel.app/static/media/search.62b80724.svg"></img>
          <StyledInput
            value={this.state.value}
            placeholder="Search..."
            onChange={this.handleChange}
          />
        </StyledForm>
      </div>
    );
  }
}

export default Searchbar;
