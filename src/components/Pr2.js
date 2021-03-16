import React from 'react';

class Player extends React.Component {

    arr = ["≧","≩","≹"]

    state = {
        i: 0,
    }

    changePlayer = () => {
        this.setState({ i: this.state.i < this.arr.length - 1 ? this.state.i + 1 : 0})        
    }

    render () {
        return (
            <div style={{ fontWeight: "bold", fontSize: 32 }} onClick={this.changePlayer}>{this.arr[this.state.i]}</div>
        )
    }
}

export default Player;