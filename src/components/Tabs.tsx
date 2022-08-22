import { useSelector, useDispatch } from 'react-redux';
import { selectTabName, setTab, selectTodoCount } from '../store';

function Tabs() {
  const tabName = useSelector(selectTabName);
  const todoCount = useSelector(selectTodoCount);
  const dispatch = useDispatch();

  return (
    <div className='tabs'>
      <div className='item-count'>
        {todoCount} Items Left
      </div>
      <div  className={`all-tab ${tabName === 'all' ? 'active': ''} `} onClick={() => {dispatch(setTab('all'))}} >
        All
      </div>
      <div className={`active-tab ${tabName === 'active' ? 'active': ''} `} onClick={() => {dispatch(setTab('active'))}} >
        Active
      </div>
      <div className={`completed-tab ${tabName === 'completed' ? 'active': ''} `} onClick={() => {dispatch(setTab('completed'))}}>
        Completed
      </div>
    </div>
  )
}

export default Tabs;