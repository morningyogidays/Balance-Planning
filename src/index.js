import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

ReactDOM.render(<App/>,document.getElementById('root'));

//Component แบบ External
//import HelloExternalComponent from './Components/HelloComponent';


//การสร้าง Component
//functional

//function HelloComponent(){
  //return <h1>สวัสดี Component</h1>
//}
//ReactDOM.render(<HelloComponent/>,document.getElementById('root'));

//class component

//class HelloClassComponent extends React.Component{
  //render(){
    //return <h1>สวัสดี Class Component</h1>
  //}
//}
//ReactDOM.render(<HelloClassComponent/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
