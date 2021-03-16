import React from 'react';

class Checkbox extends React.Component {

    state = {
        checkbox: "X",
    }

    setCheckbox = () => {
        this.setState({ checkbox: this.state.checkbox === "X" ? "V" : "X"})
    }

    render() {
        return (
            <div style={{ fontWeight: "bold", fontSize: 32 }} onClick={this.setCheckbox}>{this.state.checkbox}</div>
        )
    }
}

export default Checkbox;