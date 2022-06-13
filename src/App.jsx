import './App.css';
import React from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

function App() 
{

const [data,setData]=React.useState([]);
const getData=()=>
{
    fetch(`http://localhost:3001/employeeDetails`)
    .then((res)=>
      res.json()
    )
    .then((res)=>
    { 
      setData(res)
      
    })
    .catch((error)=>
    {
      console.log(error);
    })
}
React.useEffect(
  ()=>{
    getData()
   
  },[]
)

  return (
    <>
    <div style={{border:"1px solid black",width:"45%",margin:"auto",padding:"10px"}}>
      <h2 style={{textAlign:"center"}}>Employees Details Form</h2>
      <EmployeeForm getData={getData}/>
    </div>
    <div>
    <EmployeeList data={data}/>
    </div>
    </>
  );
}

export default App;
