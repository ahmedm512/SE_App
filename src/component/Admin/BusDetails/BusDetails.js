import React from 'react';


const BusDetails = ({currentBus, onShowDetailsSubmit,onBackSubmitT}) => {
return (


<div>
<div class="card w-20 center ma5">
  <div class="card-header">
    Bus Details
  </div>
  <div class="card-body">
    <h5 class="card-title">Bus No. {currentBus.bus_num}</h5>
    <p>From: {currentBus.start_}</p>
		<p>To: {currentBus.end_}</p>
		<p>Departure: {currentBus.Hour}</p>
		<p>Ticket Price: {currentBus.ticket_price}</p>
    <p>Reserved Seats: {currentBus.res_seats}</p>
		
    
  <button onClick={onShowDetailsSubmit} type="button" class="btn btn-primary">Show Reservations</button> <button onClick={onBackSubmitT} type="button" class="btn btn-primary">Back</button>
  </div>
</div>
</div>

       );


}



export default BusDetails;