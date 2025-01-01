import React from 'react'
import {Trash} from '@phosphor-icons/react';
import './todo-item.css'; 
import { ITodoItem } from '../types';
interface IProps{
item:ITodoItem,
handelOnToggle:React.ChangeEventHandler<HTMLInputElement>
onDelete:()=>void
}
const TodoItam = (props:IProps) => {


  return (
    <div className={`todo-item ${props.item.isDone ? 'done' : ''} ${props.item.isUrgent ? 'urgent' : ''}`}>
      <input type="checkbox" checked={props.item.isDone} onChange={props.handelOnToggle} data-item-id={props.item.id}/>
      <span>{props.item.title}</span>
      <span className='trash-icon'><Trash size={24} color="#ac4d4d" weight="fill"  onClick={props.onDelete}/></span>
    </div>
  )
}

export default TodoItam