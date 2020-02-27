import React from 'react';
import Todo from "./Todo";

export default class Index extends React.Component {
    state = {
        filters: [
            {
                name: 'all',
                complete: null
            },
            {
                name: 'active',
                complete: false
            },
            {
                name: 'completed',
                complete: true
            }
        ],
        currentFilter: 'all'
    };

    todoToshow = (state) => {
        this.setState({
            currentFilter: state
        });
    };


    render() {
        let todos = this.props.todos,
            filteredTodos = [];

        if (this.state.currentFilter === 'all') {
            filteredTodos = todos;
        } else if (this.state.currentFilter === 'active') {
            filteredTodos = todos.filter(todo => !todo.complete)
        } else if (this.state.currentFilter === 'completed') {
            filteredTodos = todos.filter(todo => todo.complete)
        }

        return (
            <div>
                <h3>Todo List ({this.state.currentFilter})</h3>
                <ol>
                    {filteredTodos.map(todo => (
                        <Todo key={todo.id}
                              todo={todo}
                              toggleComplete={() => this.props.toggleComplete(todo.id)}
                              removeCurrent={() => this.props.removeCurrent(todo.id)} />
                    ))}
                </ol>
                <div class="list-filters">
                    {this.state.filters.map(filter => (
                        <button key={filter.name} onClick={() => this.todoToshow(filter.name)}>{filter.name} {filter.complete == null ? todos.length : todos.filter(todo => todo.complete === filter.complete).length}</button>
                    ))}
                </div>
                {filteredTodos.length ? <button onClick={() => this.props.removeAll(this.state.currentFilter)}>Remove {this.state.currentFilter}</button> : null}
            </div>
        );
    }
}