import React from 'react';
import './ReservedBusCard.css'


const ReservedBusCard = ({bus_num, day_, ticket_price ,Hour, reservation_number}) => {
	
	return(
<div className='bg dib br3 pa3 ma2 grow bw3 shadow-5 pointer'>

	<div className='tc'>
		<h2>{bus_num}</h2>
		<p>Day: {day_}</p>
		<p>Departure: {Hour}</p>
		<p>Ticket Price:{ticket_price}</p>
		<p>Reservation Number:{reservation_number}</p>
	</div>
</div>

		);
}

export default ReservedBusCard;