import React from 'react';


const Rank = ({entries, name, route}) => {
return (




(route === 'cancelReservation')
? <div className="ma6"></div> 
:(route === 'tripDetails')
? <div className="ma2"></div>
:<div>
<div className="ma6"></div>
	<div className='white f2'>
	{`Welcome ${name}, ready for the ride`}
	</div>
	<div className='white f3'>
	
{(entries > 0 )
? ``
: `You haven't reserved any Busses, wanna give it a try!!`
}
	</div>
</div>






       );


}



export default Rank;