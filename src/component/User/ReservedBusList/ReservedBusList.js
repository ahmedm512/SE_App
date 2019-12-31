import React from 'react';
import ReservedBusCard from './ReservedBusCard';


const ReservedBusList = ({buses}) => {



const busArray = buses.map((bus,i) => {

	return (<ReservedBusCard
		 
		bus_num={bus.bus_num} 
		day_={bus.day_} 
		Hour={bus.Hour}
		ticket_price={bus.ticket_price}
		reservation_number={bus.reservation_number}/>

		)
})
	return(
		<div>
		{
	(busArray[0])?
	<div className='white f3'>
	{`Here is your reserved Buses...`}
	</div>:<div className='white f3'>{`There is no reservations`}</div>
	}
		
				<div>
					{busArray}
							</div>
							</div>
		);
}


export default ReservedBusList;