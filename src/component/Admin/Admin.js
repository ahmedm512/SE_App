import React from 'react';
import BusForm from './BusForm/BusForm';
import Greeting from './Greeting/Greeting'
import BusList from '../BusList/BusList';
import SearchBox from '../BusList/SearchBox';
import Scroll from '../BusList/Scroll';
import BusDetails from './BusDetails/BusDetails';

import UsersList from './UsersList/UsersList';

class Admin extends React.Component  {

	constructor(props){
		super(props);

		this.state={
		adminDetails: {
			adminName:'',
			adminEmail:''
		},
		busDetails:{
			bus_num:'',
			start_:'',
			end_:'',
			day_:'',
			Hour:'',
			seats:'',
			ticket_price:'',
			res_seats:''
		},
		searchField:'',
		route:'',
		removeBusNum:'',
		buses:[],
		reservedUsers:[],
		moreDetails: false,
	}
}

onSearchChange = (event) => { 
 
  this.setState({searchField: event.target.value});

}

onAdminRouteChange = (route) => {                                     
  
    this.setState({route: route});
  }

  onRemoveNav =() => {
this.onAdminRouteChange('removeBus');

  }

  onAddNav =() => {
this.onAdminRouteChange('addBus');

  }

  onShowSubmit = () =>{
fetch('http://localhost:4000/bustable')
    .then(response => response.json())
    .then(busTable => { 
      if(busTable[0].id){
      	this.onAdminRouteChange('showBuses');
      this.setState({buses: busTable});
      }
  })
     

  }



  onBusRemoveInput = (event) => {
	
this.setState({removeBusNum: event.target.value});

}

onRemoveSubmit = () => {
	fetch('http://localhost:4000/deleteBus', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			bus_num:this.state.removeBusNum
		})
	})
    .then(response => response.json())
    .then(res => { 
      if(res){
      	alert('Bus Was Removed Successfuly')
      	this.onAdminRouteChange('removeBus');
      }
      else{
      	alert('Bus not Found')
      }
  })
}


onBusNoChange = (event) => {
	this.setState(Object.assign(this.state.busDetails, { bus_num: event.target.value}));
	

}

onTimeChange = (event) => {
	
this.setState(Object.assign(this.state.busDetails, { Hour: event.target.value}));

}
onFromChange =(event) => {

this.setState(Object.assign(this.state.busDetails, { start_: event.target.value}));

}

onToChange =(event) => {
	
this.setState(Object.assign(this.state.busDetails, { end_: event.target.value}));

}
onDayChange =(event) => {

this.setState(Object.assign(this.state.busDetails, { day_: event.target.value}));

}

onSeatsChange =(event) => {
	
this.setState(Object.assign(this.state.busDetails, { seats: event.target.value}));

}
onPriceChange =(event) => {

this.setState(Object.assign(this.state.busDetails, { ticket_price: event.target.value}));

}


onAddSubmit = () => {
	console.log(this.state.busDetails);
	fetch('http://localhost:4000/addBus', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			bus_num:this.state.busDetails.bus_num,
			start_:this.state.busDetails.start_,
			end_:this.state.busDetails.end_,
			day_:this.state.busDetails.day_,
			seats:this.state.busDetails.seats,
			ticket_price:this.state.busDetails.ticket_price,
			Hour:this.state.busDetails.Hour
		})
	})
	.then(response => response.json())
	.then(bus => {
		if(bus.id){
			this.onAdminRouteChange('');
			alert("Bus added successfuly")
		} else {

			alert('Renter Data');
		}
	})	
}

onCardClick = (bus_num, start_, end_,day_,av_seats,ticket_price,Hour,res_seats) =>{

	this.setState(Object.assign(this.state.busDetails,{
		bus_num:bus_num , 
      	start_:start_ , 
      	end_:end_ ,
      	day_:day_ ,
      	av_seats:av_seats ,
      	ticket_price:ticket_price ,
      	Hour:Hour,
      	res_seats:res_seats
	}))
	this.onAdminRouteChange('busDetails');

	
   
	console.log(this.state.currentBus);
}

onShowDetailsSubmit = () =>{

	  fetch('http://localhost:4000/usersInBus', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			bus_num:this.state.busDetails.bus_num,
		})
	})
    .then(response => response.json())
    .then(reservedUsers => { 
      if(reservedUsers){
      	this.setState({moreDetails:true});
      this.setState({reservedUsers: reservedUsers});
      }else {
      	alert("There is No Reservations")
      }
  })
}

onBackSubmitT = () =>{
this.setState({moreDetails:false});
this.setState({reservedUsers:[]});

}


  
	render(){

const {route, buses, searchField,busDetails,removeBusNum,reservedUsers,moreDetails} = this.state;
	const filteredBuses = buses.filter(bus =>{
  	return bus.end_.toLowerCase().includes(searchField.toLowerCase());
		})
const {id, name, email, entries} = this.props;

	return(

	<div>
<div class="center btn-group" role="group" aria-label="Basic example">
  <button onClick={this.onAddNav} type="button" class="btn btn-primary">Add Bus</button>
  <button onClick={this.onShowSubmit} type="button" class="btn btn-primary">Show Buses</button>
  <button onClick={this.onRemoveNav} type="button" class="btn btn-primary">Remove Bus</button>
</div>
<div>
    <Greeting
      name={name}   
      route={route}
      />
{route === 'addBus' ?
     <BusForm 
	onBusNoChange={this.onBusNoChange} 
	onTimeChange={this.onTimeChange}
	onDayChange={this.onDayChange}
	onFromChange={this.onFromChange}
	onToChange={this.onToChange}
	onSeatsChange={this.onSeatsChange}
	onPriceChange={this.onPriceChange}
	onAddSubmit={this.onAddSubmit}
	/>
: route === 'removeBus'
?<div className='center pa4 br3 '> 
		<div className='form-group'>
		    <input onChange={this.onBusRemoveInput} type="number" className="form-control" name="inputResNo" id="inputResNo" placeholder="Enter Bus No.."/>
		    <button onClick={this.onRemoveSubmit} type="button" class="btn btn-primary">Remove Bus</button>
		</div>
</div>
: route === 'showBuses'
? <div>
      <SearchBox onSearchChange={this.onSearchChange} />
       <Scroll>
      <BusList onCardClick={this.onCardClick} buses={filteredBuses}/> 
      </Scroll>
	</div>
	: route === 'busDetails'
	?<div>
	 <BusDetails onBackSubmitT={this.onBackSubmitT} onShowDetailsSubmit={this.onShowDetailsSubmit} currentBus={busDetails}/>
	 {(moreDetails)?
       <Scroll>
      <UsersList users={reservedUsers}/> 
      </Scroll>
      :<div></div>
	 }
	</div> 
	:<div></div>
}
</div>

</div>


			);
	
	}

}


export default Admin;