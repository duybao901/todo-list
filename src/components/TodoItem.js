import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
class TodoItem extends Component {
   
    render() {
        const { item } = this.props;
        const className = classNames({
            'todo-item': true,
            'todo-item-complete': item.isComplete
        })
        // const item = this.props.item
        return (
            <div className = {className}>
                <p>
                    {item.title}
                </p>        
            </div>
        )
    };
}
export default TodoItem;