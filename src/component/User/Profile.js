import React from 'react';
import BusList from '../BusList/BusList';
import SearchBox from '../BusList/SearchBox';
import Scroll from '../BusList/Scroll';
import Rank from '../Rank/Rank';

import ReservedBusList from './ReservedBusList/ReservedBusList';
import TripDetails from './TripDetails/TripDetails';





class Profile extends React.Component {
	 constructor(props){
    super(props);

    this.state ={
      searchField: '',
      route: '',
      buses: [],
      reservedBuses:[],
      reservation_number:'',
      currentBus:{
      	bus_num:'' , 
      	start_:'' , 
      	end_:'' ,
      	day_:'' ,
      	av_seats:'' ,
      	ticket_price:'' ,
      	Hour:''
      },
      stateEntries:''
    };
}


onSearchChange = (event) => { 
 
  this.setState({searchField: event.target.value});

}

onUserRouteChange = (route) => {                                     
  
    this.setState({route: route});
  }


  onReserveSubmit = () => {
    fetch('http://localhost:4000/bustable')
    .then(response => response.json())
    .then(busTable => { 
      if(busTable[0].id){
      	this.onUserRouteChange('makeReservation');
      this.setState({buses: busTable});
      }
  })
     
  }


  onShowSubmit = () =>{
  fetch('http://localhost:4000/userReservedBuses', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email:this.props.email,
		})
	})
    .then(response => response.json())
    .then(reservedBuses => { 
      if(reservedBuses){
      	this.onUserRouteChange('showReservations');
      this.setState({reservedBuses: reservedBuses});
      }else {
      	alert("you haven't reserved any bus yet")
      }
  })

  }

  onCancelSubmit = () =>{
  fetch('http://localhost:4000/cancelReservation', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			reservation_number:this.state.reservation_number,
			email:this.props.email
		})
	})
    .then(response => response.json())
    .then(res => { 
      if(res=== 1){
      	alert('Reservation Was Canceled Successfuly')
      	this.onUserRouteChange('cancelReservation');
      }
      else{
      	alert('Reservation not Found')
      }
  })

  }

  onCancelBar =() => {
this.onUserRouteChange('cancelReservation');

  }

  onNumberChange = (event) => {
	
this.setState({reservation_number: event.target.value});

}

onConfirmSubmit = () => {
fetch('http://localhost:4000/reserveBus', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email:this.props.email,
			bus_num:this.state.currentBus.bus_num
		})
	})
    .then(response => response.json())
    .then(resNum => { 
    	this.setState({reservation_number:resNum});
    })
    .then(()=>{
fetch('http://localhost:4000/incrementEnt', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email:this.props.email
		})
	})
.then(res => res.json())
.then((ent)=>{
	this.setState({stateEntries:ent});
})

    })
    .then(()=>{
    	alert(`Your Reservation No. is ${this.state.reservation_number}`)
    	this.onUserRouteChange('');
    })
    
    
console.log(this.state.reservation_number);
}

onCancelSubmitT =() => {
this.onUserRouteChange('');

  }

onCardClick = (bus_num, start_, end_,day_,av_seats,ticket_price,Hour) =>{

	this.setState(Object.assign(this.state.currentBus,{
		bus_num:bus_num , 
      	start_:start_ , 
      	end_:end_ ,
      	day_:day_ ,
      	av_seats:av_seats ,
      	ticket_price:ticket_price ,
      	Hour:Hour
	}))
	this.onUserRouteChange('tripDetails');

	
   
	console.log(this.state.currentBus);
}




render(){

const {stateEntries, route, buses, searchField, reservedBuses, currentBus, reservation_number} = this.state;
	const filteredBuses = buses.filter(bus =>{
  	return bus.end_.toLowerCase().includes(searchField.toLowerCase());
		})
const {id, name, email, entries} = this.props;

return(

<div>
<div class="center btn-group" role="group" aria-label="Basic example">
  <button onClick={this.onReserveSubmit} type="button" class="btn btn-primary">Make Reservation</button>
  <button onClick={this.onShowSubmit} type="button" class="btn btn-primary">Show Reserved Buses</button>
  <button onClick={this.onCancelBar} type="button" class="btn btn-primary">Cancel Reservation</button>
</div>
<div>
    <Rank 
      name={name}
      entries={stateEntries}    
      route={route}
      />
{route === 'makeReservation' ?
     <div>
      <SearchBox onSearchChange={this.onSearchChange} />
       <Scroll>
      <BusList onCardClick={this.onCardClick} buses={filteredBuses}/> 
      </Scroll>
	</div>
: route === 'cancelReservation'
?<div className='center pa4 br3 '> 
		<div className='form-group'>
		    <input onChange={this.onNumberChange} type="number" className="form-control" name="inputResNo" id="inputResNo" placeholder="Your Reservation Number."/>
		    <button onClick={this.onCancelSubmit} type="button" class="btn btn-primary">Cancel Reservation</button>
		</div>
</div>
: route === 'showReservations'
? <div>
       <Scroll>
      <ReservedBusList buses={reservedBuses}/> 
      </Scroll>
	</div>
	: route === 'tripDetails'
	? <TripDetails onCancelSubmitT={this.onCancelSubmitT} onConfirmSubmit={this.onConfirmSubmit} currentBus={currentBus} reservation_number={reservation_number} /> 
	:<div></div>
}
</div>

</div>

	);

}


}


export default Profile;


// <button 
// className='w-30 grow f4 link br1 ph3 pv2 dib white bg-black'
// onClick = {onSearchSubmit}>
// {'Search'}
// </button>