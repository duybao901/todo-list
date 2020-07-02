import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
//import check from '../img/check.svg';
import check from '../img/tick2.svg';
import checked from '../img/tick1.svg';
import imagedelete from '../img/cross.svg'

class TodoItem extends Component {
    render() {        
        console.log(this.props)
        const { item, onClick ,onMouseUp} = this.props;        
        // const item = this.props.item
        console.log(onMouseUp);
        const className = classNames({
            'todo-item': true,
            'todo-item-complete': item.isComplete
        })

        // check
        var url = check;
        if (item.isComplete) {
            url = checked;
        }
        return (
            <div  className={className}>
                <img
                onClick={onClick}
                src = {url}
                className = "todo-img" />
                <p className="todo-title">
                    {item.title}
                </p>        
                <img className="todo-item-delete" src={imagedelete} onMouseUp={onMouseUp}></img>
            </div>
        )
    };
}
export default TodoItem;