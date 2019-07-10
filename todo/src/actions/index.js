export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RANDOM_ACTION = 'RANDOM_ACTION';


export const addTodo = (todoName) => {
	return {
		type: ADD_TODO,
		payload: todoName
	};
};

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload: id
	};
};

export const randomAction = () => {
	return {
		type: RANDOM_ACTION,
		payload: 'Random!'
	};
};
