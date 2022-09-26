import React, { useState } from 'react'

export default function TodoList() {
  const[todos,setTodos]=useState([])
  const[input,setInput]=useState('');
  const addTodo=(e)=>{
   e.preventDefault() //this prevent a Refresh
    console.log(`this is the input ${input}`);
    //push the input in the array
    setTodos([...todos,input])
    setInput('')
  }
    return (
    <div className='todo'>
        <h1>Welcome to my Todo List</h1>
               {/*
        To Submit the data in the page we need the form so that we can just enter and data is submit and we dont need to save it by mouse
        */}
        <form>
        <input value={input} onChange={(e)=>setInput(e.target.value)}
        type='text'
        />
 
        <button type="submit" onClick={addTodo}>AddTodo</button>
        <h2>List of todos</h2>
        {todos.map((todo)=>(
            <p>{todo}</p>
    ))}

        </form>
        
        </div>
        
  )
}
