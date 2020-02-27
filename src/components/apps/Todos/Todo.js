import React from 'react';

export default (props) => (
    <li key={props.todo.id}
        style={props.todo.complete ? {
            color: 'green',
            fontWeight: 'bold'
        } : null}>
        <span style={{textDecoration: props.todo.complete ? 'line-through' : ''}}>{props.todo.text}</span>{' '}
        <div className="todo-actions">
            <button onClick={props.toggleComplete}>{props.todo.complete ? 'Open' : 'Done'}</button>{' '}
            <button onClick={props.removeCurrent}>Remove</button>
        </div>
    </li>
);