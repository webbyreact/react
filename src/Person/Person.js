import React from 'react';
import './Person.css'

const dlt={
    fontSize :'12px',
    backgroundColor :'#ccc',
    float : "right"
}

const person = (props) => {
    return(
    <div className="Person">
        <button style={dlt} onClick={props.delete}>Delete</button>
        <p>
        I'm {props.name} and I'm {props.age} years old!
        </p>
        <p>
            {props.children}
        </p>
        <input onChange={props.changed} value={props.name} ></input>
        <input onChange={props.changedage} value={props.age} ></input> 
    </div>
    )
}
export default person;