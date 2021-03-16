import React from "react";

class Form extends React.Component {
  state = {
    input: "",
    password: "",
  };

  onChangeInput = (event) => {
    this.setState({ input: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeInput}
          value={this.state.input}
        />
        <input
          type="password"
          onChange={this.onChangePassword}
          value={this.state.password}
        />
        <button onClick={() => this.setState({ input: "", password: "" })}>
          Clear All
        </button>
      </div>
    );
  }
}

export default Form;
