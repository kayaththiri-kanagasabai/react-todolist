import React, { useRef, useState } from 'react'
import Todo from './Components/Todo'
import './index.css'





 

const App = () => {

// const [count,setCount] = useState(100);

// const increment=()=>setCount(count+1);
// const decrement=()=>setCount(count-1);
  

// const [friends,setFriends]= useState(['Jhon','Doe','Kaya','Vaaththii']);
//  const addNewFriend=()=>{
//   setFriends([...friends,'Huxn WebDev']);
//  }

//  const removeFriend=()=>{
//   setFriends(friends.filter((f)=>f!=='Jhon'));
//  }

//  const updateFriend=()=>{
//   setFriends(friends.map((f)=>
//     (f==='Kaya'?'Mrs.Vaaththii':f)
//   ));
//  }

//  const inputRef =useRef(null);
//  const [data,setData]=useState([]);

  return (
    // 
    <div>
      <Todo/>
    </div>
  )

}
export default App