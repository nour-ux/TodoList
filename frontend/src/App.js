// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React,{useEffect, useState} from "react"
import Todo from './modeTodo';


function App() {
const [tasks, setTasks]=useState([]);
const getdata=()=>{
axios
 .get('http://localhost:5000/tasks')
.then((response)=>{

  console.log("data",response);
  setTasks(response.data)
})

.catch((err)=>{
  console.log("err",err );
});
}


useEffect(()=>{
  getdata()
},[])


const maptasks=tasks.map((taskobj,i)=>(
<Todo key={i} task={taskobj}/> ))
  
return (
    <div className="App">
      <p>app</p>
     <button onClick={getdata}>Get Tasks</button>
     {maptasks}
    
    </div>
  );
}

export default App;
