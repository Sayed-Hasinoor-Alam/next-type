"use client"
import React, { FormEvent, useState } from 'react';
import { useTodos } from '../store/todos';

const AddTodo = () => {
    const [todo,setTodo]=useState("");

    const {handleAddTodo} =useTodos();


    const handleFormsubmit= (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }


  return (
    <form onSubmit={handleFormsubmit}>
        <input type="text" name="" id="" placeholder='write text' value={todo} 
        onChange={(event)=>setTodo(event.target.value)}/>
        <button type='submit'>ADD</button>
    </form>
  );
}

export default AddTodo;
