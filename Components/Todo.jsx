import{ useEffect, useRef, useState } from 'react';



import './CSS/Todo.css';
import Todoitems from './Todoitems';
let count =0;

const Todo = () => {

  const [todos,setToDos]=useState([]);
  const inputRef =useRef(null);

  const add =()=>{
  setToDos([...todos,{no:count++,text:inputRef.current.value,display:""}]) //add the input feild value to the todos array
  inputRef.current.value=""; //delete the input feild value after enter 
  localStorage.setItem("todos_count",count)
  }


   useEffect(()=>{ //save the data when reload the page
    setToDos(JSON.parse(localStorage.getItem("todos")))
    count=localStorage.getItem("todos_count");
  },[])


  useEffect(()=>{
     setTimeout(()=>{
      console.log(todos);  //print the todos array in the console
      localStorage.setItem("todos",JSON.stringify(todos))

     },100)
  },[todos])


 

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input'/>
        <div className="todo-add-btn" onClick={()=>{add()}}>ADD</div>

        
      </div>
      <div className="todo-list">
          {todos.map((item,index)=>{
            return <Todoitems key={index} setToDos={setToDos} no={item.no} display={item.display} text={item.text}/>
          })}


        </div>

    </div>
  )
}

export default Todo