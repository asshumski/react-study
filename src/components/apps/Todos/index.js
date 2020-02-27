import React from 'react';
import TodoForm from "./TodoForm";
import Index from "./TodoList";

export default class Todos extends React.Component {
    state = {
        todos: []
    };

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        });
    };

    removeCurrent = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    removeAll = (filter) => {
        let todos = this.state.todos;

        if (filter === 'all') {
            todos = [];
        } else if (filter === 'active') {
            todos = todos.filter(todo => todo.complete)
        } else if (filter === 'completed') {
            todos = todos.filter(todo => !todo.complete)
        }

        this.setState({
            todos: todos
        });
    };

    render() {
        let todoList;

        if (this.state.todos.length) {
            todoList = <Index todos={this.state.todos}
                              toggleComplete={this.toggleComplete}
                              removeCurrent={this.removeCurrent}
                              removeAll={this.removeAll}/>
        }

        return (
            <div className={'todo-list-app'}>
                <TodoForm onSubmit={this.addTodo} />
                {todoList}
            </div>
        );
    }
};

