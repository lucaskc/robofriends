import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className='scroll' id='style-1'>
			{props.children}
		</div>
	)
};

export default Scroll;

//style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}