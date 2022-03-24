import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, handleToggle, handleFilter, resetTodolist}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}
                    resetTodolist = {resetTodolist}
                    />
               )
           })}
           <button style={{margin: '20px'}} onClick={handleFilter}>Delete done tasks</button>
           <button style={{margin: '20px'}} onClick={resetTodolist}>Delete all tasks</button>
       </div>
   );
};
 
export default ToDoList;