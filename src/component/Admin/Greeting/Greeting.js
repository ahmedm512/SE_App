import React from 'react';


const Greeting = ({entries, name, route}) => {
return (




(route === 'cancelReservation')
? <div className="ma6"></div> 
:(route === 'tripDetails')
? <div className="ma2"></div>
:<div>
<div className="ma6"></div>
	<div className='white f2'>
	{`Welcome ${name}, ready for some changes`}
	</div>
</div>






       );


}



export default Greeting;