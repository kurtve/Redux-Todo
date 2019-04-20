import React from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import '../styles/App.css';


export default () => {
    return (
        <div className="App">
            <h1>My Todo List!</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};
