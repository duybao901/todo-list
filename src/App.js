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
      currentFilter:'all',
      todoList: [
        // {
        // title: 'Go to Shopping',
        // isComplete: false
        // },
        // {
        //   title: 'Go to Market',
        //   isComplete: false
        // },
        // {
        //   title: 'Go to Bed',
        //   isComplete: false
        // }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAllItem = this.onClickAllItem.bind(this);
  }

  // Su kien kem theo cua the input value + onChange
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
    if (event.keyCode === 13) {
      this.setState({
        newItem: '',
        todoList: [        
          {
            title: text,
            isComplete: true
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

  // Su kien click vao dau tick thi cac item de complete
  onClickAllItem(event) {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {   
      return {title: item.title, isComplete: event.target.checked}
    })
    this.setState({
      todoList: [
        ...newTodoList
      ]
    })  
  }

  //
  getCurrentItemLeft() {
    var count = 0;
    const { todoList } = this.state;
    todoList.forEach((item) => {
      if (item.isComplete) {
        count++;
      }
    })
    return count;
  }
  render() {
    const { todoList,newItem } = this.state;
    const checkAll1 = checkAll;
      return (     
        <div className="App">
          <h2 className="app-heading">To Do List</h2>
          <div className="header" >
            <label htmlFor="toggle-all">
             <img src={checkAll1} />
            </label>
            <input
              onClick={this.onClickAllItem}type="checkbox" id="toggle-all"
              className="toggle-all"
              onClick={this.onClickAllItem}></input>
            <input
              className="add-item"
              onKeyUp={this.onKeyUp}
              type="text"
              value={newItem} // Thang value va thang onchange phai di cung nhau
              onChange={this.onChange}
              placeholder="What needs to be done?"></input>
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
            todoList.length === 0 && <p></p>
          }
          <footer className="footer">
            <span className="counts" >                            
            <span>{this.getCurrentItemLeft()}</span> Item left
            </span>
            <ul className = "filters">
              <li>
                <a className="selected">All</a>
              </li>
              <li>
                <a>Active</a>
              </li>
              <li>
                <a>Complete</a>
              </li>
            </ul>
          </footer>
      </div>
      );
    }
  }


export default App;
