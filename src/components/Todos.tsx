import { useState, useEffect } from 'react';

import { selectTodos, removeTodo, changeStatus, selectTabName, setTodoCount } from '../store';
import { useSelector, useDispatch } from 'react-redux';
// import { FaRegEdit } from 'react-icons/fa'; 
// import { AiOutlineFileDone } from 'react-icons/ai';
import { MdOutlineDone, MdRemoveDone } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';


function Todos() {
  const todos = useSelector(selectTodos);
  const [cloneTodos, setCloneTodos] = useState([...todos]);
  const tabName = useSelector(selectTabName);
  const dispatch = useDispatch();

  
  useEffect(() => {
    let cloneArr = [];
    if (tabName === 'active') {
      cloneArr = [...todos.filter(todo => todo.status === false)];
    } else if (tabName === 'completed') {
      cloneArr = [...todos.filter(todo => todo.status === true)];
    } else {
      cloneArr = [...todos];
    }
    dispatch(setTodoCount(cloneArr.length));
    setCloneTodos([...cloneArr]);
  } , [tabName, todos]);

  return (
    <>
    {cloneTodos &&
      <ul className='todo-list'>
        {
          cloneTodos.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0)).map(todo => (
            <li key={todo.id} className={`todo-list-item ${todo.status ? 'completed-status': 'active-status'}`}>
              {/* <input type="text" readOnly value={todo.text} /> */}
              <div className='todo-text'>{todo.text}</div>
              <div className='btn-group'>
                {!todo.status &&
                  <div className='btn-icon confirm-btn' onClick={() => {dispatch(changeStatus(todo.id))}} >
                     <MdOutlineDone  />
                  </div>
                }
                {todo.status && 
                  <div className='btn-icon undo-btn' onClick={() => {dispatch(changeStatus(todo.id))}}>
                    <MdRemoveDone />
                  </div>
                }
                <div className='btn-icon delete-btn' onClick={() => {dispatch(removeTodo(todo.id))}}>
                  <RiDeleteBin6Line />
                </div>
              </div>
              
            </li>
          ))
        }
      </ul>
    }
    </>
  )
}

export default Todos