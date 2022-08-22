import Input from './components/Input';
import Todos from './components/Todos';
import Tabs from './components/Tabs'


function App() {
  

 


  return (
   <div className='todoContainer'>
    <div className="app-header">TO DO LIST</div>
    <Input />
    <Todos />
    <Tabs />
    
  </div>
  );
}


export default App;
