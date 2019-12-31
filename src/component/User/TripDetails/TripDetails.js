import React from 'react';


const TripDetails = ({currentBus, reservation_number, onConfirmSubmit,onCancelSubmitT}) => {
return (


<div>
<div class="card w-20 center ma5">
  <div class="card-header">
    Trip Details
  </div>
  <div class="card-body">
    <h5 class="card-title">Bus No. {currentBus.bus_num}</h5>
    <p>From: {currentBus.start_}</p>
		<p>To: {currentBus.end_}</p>
		<p>Departure: {currentBus.Hour}</p>
		<p>Ticket Price: {currentBus.ticket_price}</p>
		
    
  <button onClick={onConfirmSubmit} type="button" class="btn btn-primary">Confirm</button> <button onClick={onCancelSubmitT} type="button" class="btn btn-primary">Cancel</button>
  </div>
</div>
</div>

       );


}



export default TripDetails;