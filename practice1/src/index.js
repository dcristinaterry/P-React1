import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Person from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


var app=(

  <div >
    <Person name="cristina" age="15"/>
    <Person name="dan" age="18"/>
    </div>

);

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
