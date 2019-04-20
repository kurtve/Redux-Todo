import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';


const mapStateToProps = state => ({
	todos: state.todos
});

const TodoList = (props) => {

    return (
        <ul className='todo-list'>
        	{props.todos.map(todo => (
	            <li key={todo.id} className={todo.complete ? 'todo complete' : 'todo'}
	            	onClick={() => props.toggleTodo(todo.id)}>
	            	{todo.name}
	            </li>
        	))}
        </ul>
    );
};


export default connect(mapStateToProps, {toggleTodo})(TodoList);
