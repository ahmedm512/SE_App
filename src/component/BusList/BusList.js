import React from 'react';
import BusCard from './BusCard';


const BusList = ({buses, onCardClick}) => {



const busArray = buses.map((bus,i) => {

	return (<BusCard onCardClick={onCardClick}
		 
		bus_num={bus.bus_num} 
		start_={bus.start_} 
		end_={bus.end_}
		day_={bus.day_}
		av_seats={bus.seats-bus.res_seats}
		ticket_price={bus.ticket_price}
		Hour={bus.Hour}
		res_seats={bus.res_seats}
		/>
		)
})
	return(

				<div>
					{busArray}
							</div>

		);
}


export default BusList;