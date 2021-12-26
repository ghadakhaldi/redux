import React from 'react';

import Input from './components/input';
import './App.css';
import TodoItem from './components/TodoItem';


const todoList=[{
  item:'todo',
        done:false,
        id:116555
},
{
  item:'todo',
        done:true,
        id:75486
}]

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(item=>(
              <TodoItem
              name={item.task}
              done={item.done}
              id={item.id}
              />
            ))
          }
        </div>
     <Input/>
    </div>
    </div>
  );
}

export default App;
