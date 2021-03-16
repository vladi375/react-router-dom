import React from 'react';

class Comp extends React.Component {

    state = {
        isSignedIn: false
    }

    sign = () => {
        setTimeout(() => {
            this.setState({ isSignedIn: !this.state.isSignedIn })
        }, 3000);
    }

    render () {
        return (
            !this.state.isSignedIn ? <button onClick={this.sign}>Sign In</button> : <div>Hello, world!</div>           
        )
    }
}

export default Comp;