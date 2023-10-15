"use client"

import React from 'react';
import { useTodos } from '../store/todos';
import { useSearchParams } from 'next/navigation';

const Todos = () => {

    const {todos,toggleTodo,handleAddTodo,handleTodoDelete}= useTodos();
    const searchParams = useSearchParams();
    const todosFilter= searchParams.get('todos');
    console.log(todos);

    let filter = todos;

    if(todosFilter === 'active'){
        filter = filter.filter((todo)=> !todo.completed)
    } else if (todosFilter === "completed"){

      filter=filter.filter((todo)=>todo.completed)

    }

  return (
    <ul>
        {
            filter.map((todo)=>{
              

                return <li key={todo.id}>
                       
                        <input type="checkbox" name='' id={`todo-${todo.id}`} checked={todo.completed} 
                        onChange={()=> toggleTodo(todo.id)} />

               <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>    
               {

                todo.completed && (
                  <button type='button' onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                )
               }    
                </li>
            })
        }
    </ul>
  );
}

export default Todos;
