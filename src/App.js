import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';

const todoList = [
  // {
  //   title: 'Go to Shopping',
  //   isComplete: true
  // },
  // {
  //   title: 'Go to Market',
  //   isComplete: true
  // },
  // {
  //   title: 'Go to Bed',
  //   isComplete: false
  // }
]
function App(){
  return (
    <div className="App">
      {
        todoList.length > 0 && todoList.map((item, index) => {
          return <TodoItem key={index} item={item} />
        })
      }
      {
        todoList.length === 0 && <p>Nothing here</p>
      }
    </div>
  );
}

export default App;
