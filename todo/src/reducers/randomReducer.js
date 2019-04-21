import { RANDOM_ACTION } from '../actions';


export default (state = null, action) => {
	switch (action.type) {
		case RANDOM_ACTION:
			window.alert(action.payload);
			return state;

		default:
			return state;
	}
};
