import React from 'react';
import CurrencyInput from './CurrencyInput';




const BusForm = ({onBusNoChange,onTimeChange,onDayChange, onFromChange,onToChange,onSeatsChange, onPriceChange, onAddSubmit }) => {

return(


<article className="pa4 tc br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
	<main className="dtc v-mid tc white ph3 ph4-l">
		  <div className="measure ">
		  <fieldset id="add bus" className="ba b--transparent ph0 mh0">
		<div className="form-group">
		    <label htmlFor="inputBusNo">Bus No.</label>
		    <input onChange={onBusNoChange} type="number" className="form-control" name="inputBusNo" id="inputBusNo" placeholder="Bus No..."/>
		  </div>
		<div className="form-row">  
		  <div className="form-group col-md-6">
		    <label htmlFor="inputDay">Day</label>
		    <input onChange={onDayChange} type="text" className="form-control" name="inputDay" id="inputDay" placeholder="Day"/>
		  </div>
		<div className="form-group col-md-6">
		      <label htmlFor="inputTime">Starting Time</label>
		      <input onChange={onTimeChange} type="time" className="form-control" name="inputTime" id="inputTime" step="1800"/>
		</div>
		</div>  
		<div className="form-row">
			<div className="form-group col-md-6">
		      <label htmlFor="inputDestination">From</label>
		   	  <input onChange={onFromChange}  type="text" className="form-control"  name="inputFrom" id="inputFrom"  placeholder="place"/>
			</div>
		    <div className="form-group col-md-6">
		      <label htmlFor="inputDestination">To</label>
		      <input onChange={onToChange}  type="text" className="form-control" name="inputTo" id="inputTo" placeholder="place"/>
		    </div>
		</div>
		  <div className="form-row">
		    <div className="form-group col-md-6">
		      <label htmlFor="inputSeats">No.of Seats</label>
		      <input onChange={onSeatsChange}  type="number" className="form-control" name="inputSeats" id="inputSeats"/>
		    </div>
		    <div className="form-group col-md-6">
		      <label htmlFor="ticketPrice">Ticket Price</label>
		      <CurrencyInput onChange={onPriceChange}  className="form-control" name="price" id="price" placeholder="0.00" type="text" />
		    </div>
		  </div>
		 </fieldset>
		  
		  
		  <div className="form-group">
		  <button onClick={onAddSubmit} type="submit" className="btn btn-primary">Add</button>
		  </div>
		  </div>
	</main>
</article>




	);



}


export default BusForm;


