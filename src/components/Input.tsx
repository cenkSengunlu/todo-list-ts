import { useState, useRef } from 'react';
import { addTodo } from '../store';
import { useDispatch } from 'react-redux';

function Input() {
  const [todo, setTodo] = useState<string>('');
  const dispatch = useDispatch();

  const todoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (ev: string = '') => {
    if(todo.trim() === ''){
      return;
    }

    if(ev === 'Enter' && todoRef.current){
      todoRef.current.blur();
    }
    dispatch(addTodo(todo));
    setTodo('');
  }
  return (
    <div className='add-todo'>
      <input className='task-input' ref={todoRef} value={todo} type="text" placeholder='Add New To Do' onChange={(e) => setTodo(e.target.value)} onKeyPress={(ev) => { if (ev.key === "Enter")  {handleAddTodo(ev.key)}}} />
      <button className='task-button' disabled={!todo.trim()} onClick={() => handleAddTodo()}></button>
    </div>
  )
}

export default Input;