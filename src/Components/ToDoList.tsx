import React, { useState } from 'react'
import TodoItem from './TodoItem.tsx';
import { Item } from '../assists/decleration';

interface ListProps extends React.ObjectHTMLAttributes<HTMLElement>{
 todos:Item[];
}


function ToDoList({todos}:ListProps) {

  const [todosList, setTodosList]= useState(todos);

  const handleChange=(item)=>{
      setTodosList(
        [...todosList.filter(i=>i!==item)]
      )
  }

  return (
    <ul>
      {todosList.map((item,i)=>{
        return <TodoItem key ={i} item={item} handleChange={handleChange}/>
      })}
    </ul>
  )
}

export default ToDoList