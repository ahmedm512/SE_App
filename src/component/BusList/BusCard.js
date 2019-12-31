import React from 'react';
import './BusCard.css'


const Card = ({bus_num, start_, end_,day_,av_seats,ticket_price,Hour,onCardClick, res_seats}) => {
	
	return(
<div className='bg dib br3 pa3 ma2 grow bw3 shadow-5 pointer'>

	<div onClick={ () => onCardClick(bus_num, start_, end_,day_,av_seats,ticket_price,Hour,res_seats)} className='tc white'>
		<h2>{bus_num}</h2>
		<p>From: {start_}</p>
		<p>To: {end_}</p>
		<p>Departure:{Hour}</p>
		<p>Available Seats: {av_seats}</p>
	</div>
</div>

		);
}

export default Card;