import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem';


class App extends Component{
  constructor() {
    super();
    this.state = {  
      todoList: [
        {
        title: 'Go to Shopping',
        isComplete: false
        },
        {
          title: 'Go to Market',
          isComplete: false
        },
        {
          title: 'Go to Bed',
          isComplete: false
        }
      ]
    }
  }
  onClickItem(item) {
    return (event) => {
      const { todoList } = this.state;
      const index = todoList.indexOf(item); // Index thang nao khi click
      const isComplete = item.isComplete; // Lay gia tri hien tai
      this.setState({ // Tao ra 1 state moi 
        todoList: [
          ...todoList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoList.slice(index+1)
        ]
      });
    }
  }
  render() {
    const { todoList } = this.state;
      return (     
        <div className="App">
          {
            todoList.length > 0 && todoList.map((item, index) => {
              return <TodoItem
                key={index}
                item={item}
                onClick={this.onClickItem(item)} />
            })
          }
          {
            todoList.length === 0 && <p>Nothing here</p>
          }
        </div>
      );
    }
  }

export default App;
