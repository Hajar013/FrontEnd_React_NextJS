import { useState } from 'react'
import './App.css'
import Form from './components/form/form.component'
import TodoList from './components/todo-list/todo-list.component'
import Dashboard from './components/dashboard/dashboard.component'
import { ITodoItem } from './components/types'

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const handelNewItem = (item: ITodoItem) => {
    setTodos([...todos, item]);
  }
  const handelTaskToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const itemId = event.target.dataset["itemId"];
    const newItems = todos.map(item => {
      if (item.id === Number(itemId)) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodos(newItems);

  }



  function handelDelete(index: number): void {
    const newItems = [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)];
    setTodos(newItems);

  }
  const date = new Date(); 

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const formattedDate = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  
  return (
    <div className='main'>
      <p>{formattedDate}</p>
      <Form onSubmit={handelNewItem} />
      <Dashboard items={todos} />
      <TodoList items={todos} handelOnToggle={handelTaskToggle} onDelete={handelDelete} />

    </div>
  )
}

export default App
