import './App.css';
import React from"react";
import Transaction from './Components/Transaction';
import FormComponent from './Components/FormComponent';
import {useState,useEffect} from "react";
import DataContext from './Components/Data/DataContext';
import ReportComponent from './Components/ReportComponent';
//import {browserRouter as Router,Switch,Route,Link} from "react-router-dom"
//import { element } from 'prop-types';

//Nested omponent (การสร้าง component ที่เขียนซ้อนกันได้หรือรวมเอา component หลายๆตัวเอามาเขียนรวมกัน ให้อยู่ภายใต้ component เดียว)

function App() {
  const design = {color:"#abb8c3",textAlign:"center",fontSize:"1.5rem"}
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income);
    setReportExpense(expense);
  },[items,reportIncome,reportExpense])

  
  return (
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense }}>
      <div className='container'>
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        {/* <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to="">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>
        </Router> */}
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;

//Ex
//return (
  //<div className="App">
    //<header className="App-header">
      //<img src={logo} className="App-logo" alt="logo" />
      //<p>
        //Edit <code>src/App.js</code> and save to reload.
      //</p>
      //<a
        //className="App-link"
        //href="https://reactjs.org"
        //target="_blank"
        //rel="noopener noreferrer"
      //>
        //Learn React
      //</a>
    //</header>
  //</div>
//);

//React JSX แบบ div
//function App() {
  //return (
   //<div>
     //<h1>โปรแกรมบัญชีรายรับขรายจ่าย</h1>
     //<p>บัญทึกข้อมูลบัญชีในแต่ละวัน</p>
     //<ul>
      //<li>ค่าเดินทาง <span>-200</span></li>
      //<li>เงินเดือน <span>+20,000</span></li>
      //<li>ค่าอาหาร <span>-500</span></li>
     //</ul>
    //</div>
  //);
//}

//React JSX แบบ section/article
//function App() {
  //return (
   //<section>
     //<article>
      //<h1>โปรแกรมบัญชีรายรับขรายจ่าย</h1>
      //<p>บัญทึกข้อมูลบัญชีในแต่ละวัน</p>
      //<ul>
       //<li>ค่าเดินทาง <span>-200</span></li>
       //<li>เงินเดือน <span>+20,000</span></li>
       //<li>ค่าอาหาร <span>-500</span></li>
      //</ul>
     //</article>
    //</section>
  //);
//}

//React JSX แบบ Fragment
//function App() {
  //return (
   //<>
     //<article>
      //<h1>โปรแกรมบัญชีรายรับขรายจ่าย</h1>
      //<p>บัญทึกข้อมูลบัญชีในแต่ละวัน</p>
      //<ul>
       //<li>ค่าเดินทาง <span>-200</span></li>
       //<li>เงินเดือน <span>+20,000</span></li>
       //<li>ค่าอาหาร <span>-500</span></li>
      //</ul>
     //</article>
    //</>
  //);
//}

// reducer state
  // const [showReport,setShowReport] = useState(true)
  // const reducer = (state,action)=>{
  //   switch(action.type){
  //     case "SHOW" :
  //       return setShowReport(true)
  //     case "HIDE" :
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)
  //return
  //{showReport && <ReportComponent/>}
  //<h1>{result}</h1>
        //<button onClick={()=>dispatch({type:"SHOW"})}>show</button>
        //<button onClick={()=>dispatch({type:"HIDE"})}>hide</button>