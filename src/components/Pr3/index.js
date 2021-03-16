import React from 'react';
import './styles.css';

class Loading extends React.Component {

    state = {
        loader: false,
    }

    loading = () => {
        this.setState({loader: !this.state.loader});
    }


    render () {
        return (
            !this.state.loader ? <button onClick={this.loading}>Load</button> : <div className="loader loader-animated" onClick={this.loading}></div>
        )
    }
}

export default Loading;