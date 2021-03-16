import React from 'react';
import './styles.css';
import data from '../../data.json';


class Data extends React.Component {

    render () {
        return (
            <div className="container">
                { data.map(item => {
                    return <div key={item._id} className="people-list"><h3>{item.name.first}</h3><h4>{item.name.last}</h4></div>
                })}
            </div>
        )
    }
}

export default Data;