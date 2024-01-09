import React from 'react'
import { DeleteForever } from '@mui/icons-material';
import { Item } from '../assists/decleration';

interface ItemProps extends React.LiHTMLAttributes<HTMLLIElement>{
  item:Item,
  handleChange:Function
}

function TodoItem({item, handleChange}:ItemProps) {
  return (
    <li >
      <div>{item.text}</div>
      <div onClick={()=>handleChange(item)}>
        <DeleteForever color="primary"/>
      </div>
    </li>
  )
}

export default TodoItem