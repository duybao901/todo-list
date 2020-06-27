import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import checkAll from './img/checkall.svg';
import TodoItem from './components/TodoItem';


class App extends Component{
  constructor() {
    super();
    this.state = {  
      newItem: '',
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
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  
  onChange(event) {
    this.setState({
      newItem: event.target.value,
      //...this.state.todoList
    })
  }
  onKeyUp(event) {
    const text = event.target.value;
    if (!text)
      return;
    //text = text.trim(); // Xoa ki tu trang thua`
    // if (!text)
    //   return;
    if (event.keyCode === 13) {
      this.setState({
        newItem: '',
        todoList: [        
          {
            title: text,
            isComplete: false
          },
          ...this.state.todoList
        ]
      })
    }
  }

  // Them su kien khi click vao item nao thi item se them class active 
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
    const { todoList,newItem } = this.state;
    const checkAll1 = checkAll;
      return (     
        <div className="App">
          <h2 className="app-heading">To Do List</h2>
          <div className="header">
            <img src={checkAll1} />
            <input
              onKeyUp={this.onKeyUp}
              type="text"
              value={newItem} // Thang value va thang onchange phai di cung nhau
              onChange={this.onChange}
              placeholder="Add new item"></input>
          </div>
          {
            todoList.length > 0 && todoList.map((item, index) => {
              return <TodoItem
                key={index}
                item={item}                
                onClick={this.onClickItem(item)}
                
              />
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
