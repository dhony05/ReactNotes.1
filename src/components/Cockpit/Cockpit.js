import React from 'react';
import "../Persons/Person/Person.css"

const cockpit = (props) =>{

  props.style.backgroundColor = "red";
  props.style[':hover'] = {
    backgroundColor: 'salmon',
    color:'black'

  };
    let classes = [];
    if(props.persons.length <= 2){
      classes.push("red");
    }
    if(props.persons.length <= 1){
      classes.push("bold");
    }
    return (
        <div>
        <h1>{props.title}</h1>
        <p className={classes.join(" ")}>This is a paragraph</p>
        <button style={props.style} onClick={props.clicked}>
          Switch Name
        </button>

        </div>
    );
};


export default cockpit;