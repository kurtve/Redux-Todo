import { ADD_TODO } from '../actions';
import { TOGGLE_TODO } from '../actions';


const initialState = {
	todos: [{name: 'Add something to the Todo List', id: 1, complete: false}],
	nextId: 2
};


export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const nextId = state.nextId;
			const newNextId = nextId + 1;
			const newTodo = {id: nextId, name: action.payload, complete: false};
			return {
				...state,
				nextId: newNextId,
				todos: [...state.todos, newTodo]
			};
		case TOGGLE_TODO:
			const newTodos = state.todos.map(todo =>
				todo.id === action.payload ? {name: todo.name, id: todo.id, complete: !todo.complete} : todo);
			return {
				...state,
				todos: newTodos
			};
		default:
			return state;
	}
};
