import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
//import check from '../img/check.svg';
import check from '../img/tick2.svg';
import checked from '../img/tick1.svg';

class TodoItem extends Component {
    render() {        
        const { item, onClick} = this.props;
        // const item = this.props.item
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
                <img onClick={onClick} src={url} className="todo-img"/>
                <p className="todo-title">
                    {item.title}
                </p>        
            </div>
        )
    };
}
export default TodoItem;