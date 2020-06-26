import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
class TodoItem extends Component {
    render() {
        const { item, onClick} = this.props;
        // const item = this.props.item
        const className = classNames({
            'todo-item': true,
            'todo-item-complete': item.isComplete
        })
        return (
            <div onClick={onClick} className = {className}>
                <p>
                    {item.title}
                </p>        
            </div>
        )
    };
}
export default TodoItem;