import React from 'react';
import './styles.css';

class Ex2 extends React.Component {

    state = {
      italic: false
    };

    changeStyle = () => {
      this.setState({ italic: !this.state.italic ? true : false });
    }

    render() {
      return (
        <p className={this.state.italic ? "text" : ""} onClick={this.changeStyle}> lorem ipsum </p>
        )
    }
}

export default Ex2;