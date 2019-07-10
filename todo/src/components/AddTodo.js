import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';


class AddTodo extends React.Component {

	state = { newtodo: '' };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleClick = (e) => {
		e.preventDefault();
		this.setState({ newtodo: '' });
		this.props.addTodo(this.state.newtodo);
	};


    render() {
        return (
        	<form className='add-todo'>
                <h3>Add a New Todo:</h3>
                <input type='text' name='newtodo' value={this.state.newtodo}
                	onChange={this.handleChange} placeholder='enter new todo' />
                <button onClick={this.handleClick}>Add Todo</button>
            </form>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);
