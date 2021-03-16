import React from 'react';
import './styles.css';

const Loading = (props) => {
    return (
        props.loading ? <div className="loader loader-animated"></div> : <button>Load</button>
    ) 
}

class Pr3props extends React.Component {
    render () {
        return (
            <div>
                <Loading loading={true}/>
            </div>
        )
    }
}

export default Pr3props;