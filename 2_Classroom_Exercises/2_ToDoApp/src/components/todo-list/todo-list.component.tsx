import React from 'react'
import './todo-list.css'; 
import TodoItam from '../todo-item/todo-item.component'
import { ITodoItem } from '../types'
interface IProps {
  items: ITodoItem[],
  handelOnToggle: React.ChangeEventHandler<HTMLInputElement>,
  onDelete:(index : number )=>void
}

const TodoList = (props: IProps) => {
  return (
    <div className="todo-list">
      {props.items.map(
        (item,index) => <TodoItam key={item.id} item={item} handelOnToggle={props.handelOnToggle} onDelete={()=>props.onDelete(index) } />
      )}
    </div>
  )
}

export default TodoList