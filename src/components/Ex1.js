import React from 'react';

const Text = (props) => {  
    return <p style={{fontSize: `${props.fontSize}px`, fontWeight: `${props.fontWeight}`, color: `${props.color}`, textDecoration: props.textDecoration ? "underline" : ""}} >{props.className}</p>;
  }

class Ex1 extends React.Component {
    
    render () {
        return (
            <div className="App">
      <div>
        <Text className="Regular Text" fontSize={14}/>
        <Text className="Huge Header" fontWeight="bold" fontSize={32} />
        <Text className="Danger notification" color="red"/>
        <Text className="Underline Text" textDecoration={true}/>    
      </div>      
    </div>
        );
    }
}

export default Ex1;