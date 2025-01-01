import React from 'react'
import { ITodoItem } from '../types';
import './form.css'; 
interface IProps{
  onSubmit:(item:ITodoItem)=>void;
}

const Form = (props:IProps) => {
  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title: string = event.currentTarget['task'].value;
    const isUrgent: boolean = event.currentTarget['urgent'].checked;
    if (title.length > 3) {
      const newTask: ITodoItem = {
        id: Date.now(),
        title:title,
        isUrgent,
        isDone:false,
      }
      props.onSubmit(newTask);
    }

  }

  return (
    <form onSubmit={handelSubmit} >
      <input type='text' name="task" />
      <div>
        <label htmlFor='urgent'>urgent</label>
        <input type='checkbox' id='urgent' name='urgent' />

      </div>
      <input type='submit' value='addToDo' />
    </form>
  )
}

export default Form