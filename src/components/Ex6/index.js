import React from "react";
import "./styles.css";

class Loader extends React.Component {
  state = {
    loading: false,
    greeting: "",
  };

  onChange = () => {
    setTimeout(() => {
      this.sayHi();
    }, 3000);
    this.setState({ loading: !this.state.loading });
  };

  sayHi = () => {
    this.setState({ greeting: "Hello!", loading: !this.state.loading });
  };

  render() {
    return (
      <div>
        <button onClick={this.onChange}>Say Hi!</button>
        {this.state.loading && <div className="loader loader-animated"></div>}
        {this.state.greeting !== "" && <div>{this.state.greeting}</div>}
      </div>
    );
  }
}

export default Loader;
