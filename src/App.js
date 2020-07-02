import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import checkAll from './img/tickall2.svg';
import TodoItem from './components/TodoItem';


class App extends Component{
  constructor() {
    super();
    this.state = {  
      newItem: '',
      currentFilter: 'all',
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
          isComplete: true
        }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAllItem = this.onClickAllItem.bind(this);
    this.addClassSelected = this.addClassSelected.bind(this);
    this.filterItem = this.filterItem.bind(this)
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
      return {title: item.title, isComplete: !event.target.checked}
    })
    this.setState({
      todoList: [
        ...newTodoList
      ]
    })  
  }

  // Lay item chua duoc complete
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

  // Them class  khi click
  addClassSelected(event) {
    var btnFilters = document.querySelectorAll(".filters li a");
    for (let i = 0; i < btnFilters.length; i++){
      btnFilters[i].className += btnFilters[i].className.replace(" ", "selected");
    }
    event.currentTarget.className = "selected";
  }

  // filter item theo state
  filterItem(event) {
    this.setState({
      currentFilter: event.currentTarget.textContent
    })
  }

  // Click item nao xoa item do
  deleteItem(item) {
    return (event) => {
      const { todoList } = this.state;
      const index = todoList.indexOf(item);     
      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1)
        ]
      })
    }
  }
  // clear all item
  render() {
    const { newItem,currentFilter,todoList } = this.state;
    const checkAll1 = checkAll;
    var todoListFilter = todoList;
    if (currentFilter === 'Active') {
      todoListFilter = todoList.filter((item) => {
        return item.isComplete === true;
      })
    } else {
      if (currentFilter === 'Complete') {
        todoListFilter = todoList.filter((item) => {
          return item.isComplete === false;
        })
      }
    }

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
            todoListFilter.length > 0 && todoListFilter.map((item, index) => {
              return <TodoItem
                key={index}
                item={item}                
                onClick={this.onClickItem(item)}  
                delitem={this.deleteItem(item)}
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
                <a onMouseUp={this.addClassSelected} onClick={this.filterItem} >All</a>
              </li>
              <li>
                <a onMouseUp={this.addClassSelected} onClick={this.filterItem} >Active</a>
              </li>
              <li>
                <a onMouseUp={this.addClassSelected} onClick={this.filterItem} >Complete</a>
              </li>
            </ul>
          </footer>
      </div>
      );
    }
  }


export default App;
