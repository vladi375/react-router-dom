import React from 'react';
import './styles.css';

class Ex3 extends React.Component {
    render() {
      return (
        <div className="App">
          <Square label="This is a big square" cssClass="bigSquare" />
          <Square label="This is a middle square" cssClass="middleSquare" />
          <Square label="This is a little square" cssClass="littleSquare" />
        </div>
      );
    }
}
  
  class Square extends React.Component {
    render() {
      return <div className={this.props.cssClass}>{this.props.label}</div>;
    }
}

export default Ex3;