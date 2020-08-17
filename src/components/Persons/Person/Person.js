import React from 'react';
import './Person.css';


const person = (props) => {

    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }
    const style = {

        '@media (minwWidth: 500px)':{
            width:'450px'
        }
    };

    return (<div className="Person" style={style}>

    <p onClick={props.click}>I'm a {props.name} and and I am {props.age} years old !</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed }value={props.name}></input>
    </div>
    )};

export default person;