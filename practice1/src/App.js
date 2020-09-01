import React from 'react';
import './App.css';

function Person(props) {

  return (
    <div className="person">
     <p > name:  {props.name}</p>
     <p > age:  {props.age}</p>
    </div>
  );

}

export default Person;
