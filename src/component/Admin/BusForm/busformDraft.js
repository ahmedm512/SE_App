<article className="pa4 tc br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
	<div className="dtc v-mid tc white ph3 ph4-l">
	
		<div className="form-group">
		    <label htmlFor="inputBusNo">Bus No.</label>
		    <input onChange={onBusNoChange} type="text" className="form-control" id="inputBusNo" placeholder="Bus No..."/>
		  </div>
		<div className="form-row">  
		  <div className="form-group col-md-6">
		    <label htmlFor="inputDay">Day</label>
		    <input onChange={onDayChange} type="text" className="form-control" id="inputDay" placeholder="Day"/>
		  </div>
		<div className="form-group col-md-6">
		      <label htmlFor="inputTime">Starting Time</label>
		      <input onChange={onTimeChange} type="time" className="form-control" id="inputTime" step="1800"/>
		</div>
		</div>  
		<div className="form-row">
			<div className="form-group col-md-6">
		      <label htmlFor="inputDestination">From</label>
		   	  <input onChange={onFromChange}  type="text" className="form-control"  id="inputDestination"  placeholder="place"/>
			</div>
		    <div className="form-group col-md-6">
		      <label htmlFor="inputDestination">To</label>
		      <input onChange={onToChange}  type="text" className="form-control" id="inputDestination" placeholder="place"/>
		    </div>
		</div>
		  <div className="form-row">
		    <div className="form-group col-md-6">
		      <label htmlFor="inputSeats">No.of Seats</label>
		      <input onChange={onSeatsChange}  type="number" className="form-control" id="inputSeats"/>
		    </div>
		    <div className="form-group col-md-6">
		      <label htmlFor="ticketPrice">Ticket Price</label>
		      <CurrencyInput onChange={onPriceChange}  className="form-control" placeholder="0.00" type="text" />
		    </div>
		  </div>
		  
		  
		  <div className="form-group">
		  <button onClick={onAddSubmit} type="submit" className="btn btn-primary">Add</button>
		
		 
		  </div>
	</div>
</article>

