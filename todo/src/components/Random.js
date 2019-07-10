import React from 'react';
import { connect } from 'react-redux';

import { randomAction } from '../actions';



const Random = (props) => {

	const handleClick = (e) => {
		e.preventDefault();
		props.randomAction();
	};

    return (
      	<form className='random'>
            <button onClick={handleClick}>Random Action!</button>
        </form>
    );
}

export default connect(null, { randomAction })(Random);
