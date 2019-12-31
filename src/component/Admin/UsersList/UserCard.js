import React from 'react';
import './UserCard.css'


const Card = ({name,email}) => {
	
	return(
<div className='bg dib br3 pa3 ma2 grow bw3 shadow-5 pointer'>

	<div className='tc'>
		<p>Name: {name}</p>
		<p>Email: {email}</p>
	</div>
</div>

		);
}

export default Card;