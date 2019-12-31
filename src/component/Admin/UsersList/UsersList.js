import React from 'react';
import UserCard from './UserCard';


const UserList = ({users}) => {



const userArray = users.map((user,i) => {

	return (<UserCard
		 
		name={user.name}
		email={user.email}
		/>
		)
})
	return(
<div>
{
		(userArray[0])?
	<div className='white f3'>
	{`Here is the reserved users...`}
	</div>:<div className='white f3'>{`There is no reservations`}</div>
	
}
				<div>
					{userArray}
							</div>
							</div>

		);
}


export default UserList;