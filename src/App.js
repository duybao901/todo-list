import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';

const todoList = [
  'Go to Shopping',
  'Go to Market',
  'Go to Bed'
]
function App(){
  return (
    <div className="App">
      {
        todoList.map((item, index) => {
          return <TodoItem key={index} title = {item}/>
        })  
      }
    </div>
  );
}

export default App;
