import React, {useState} from 'react';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  // filter task status # complete 
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const resetTodolist = () =>{
    let resetlist = [];
    setToDoList(resetlist);
  }

 return (
   <div className="App">
    	<Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} resetTodolist={resetTodolist}/>
   </div>
 );
}
 
export default App;