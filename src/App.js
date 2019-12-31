import React, {Component} from 'react';

import Particles from 'react-particles-js';
import Navigation from './component/Navigation/Navigation';

import Signin from './component/Signin/Signin';
import Register from './component/Register/Register';

import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import Profile from './component/User/Profile';

import './App.css';



const particlesOptions = {
  
   particles: {
     number: {
      value:30,
      density: {
        enable: true,
        value_area: 100
      }
    }
  }
}

const initialState = {
      searchField: '',
      route: 'home',
      isSignedIn: false,
      user:{
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: '',
      },
      buses: []
    }




class App extends Component {
  constructor(){
    super();
    this.state = initialState;
}


  // componentDidMount(){
  //   // fetch('http://localhost:4000/bustable')
  //   // .then(response => response.json())
  //   // .then(busTable => this.setState({buses: busTable}))
  // }

  


  
  onRouteChange = (route) => {
    if(route === 'signout'){
      
      this.setState(initialState);
    } 
    else if(route === 'profile') {
      this.setState({isSignedIn: true});
    }else if(route === 'admin') {
      this.setState({isSignedIn: true});
    }

    this.setState({route: route});
  }

  onBarClick = (event) =>{

    let sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('transform-off')
}

 loadUser = (user) => {
    this.setState({user:{
        id: user.id,
        name:user.name,
        email: user.email,
        entries: user.entries,
        joined: user.joined
      }})
  }
  

render() {

  const { isSignedIn, route, buses, searchField, user} = this.state;

    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isAdmin={user.isAdmin} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} onBarClick={this.onBarClick}  />
        { (route === 'admin')
         ? <Admin id={user.id} name={user.name} email={user.email}  />
         : route === 'profile'
          ? <Profile id={user.id} name={user.name} entries={user.entries} email={user.email} />

            : route === 'home'
            ? <Home onRouteChange={this.onRouteChange} />
            :( 
              route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
        }
        
      </div>
    );
}

}

export default App;



// { route === 'home'
        //   ? <div>
        //       <Logo />
        //       <Rank 
        //       name={this.state.user.name}
        //       entries={this.state.user.entries}    
        //       />
        //       <ImageLinkForm
        //         onInputChange={this.onInputChange}
        //         onPictureSubmit={this.onPictureSubmit}
        //       />
        //       <FaceRecognition box={box} imageUrl={imageUrl} />
        //     </div>
        //   : (
        //      route === 'signin'
        //      ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        //      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        //     )
        // }










         // .then(response => {
      //   if (response) {
      //     fetch('http://localhost:4000/findface', {
      //       method: 'put',
      //       headers: {'Content-Type': 'application/json'},
      //       body: JSON.stringify({
      //         id: this.state.user.id
      //       })
      //     })
      //       .then(response => response.json())
      //       .then(count => {
      //         this.setState(Object.assign(this.state.user, { entries: count}))
      //       })
      //       .catch(console.log)
      //   }
      //   this.displayFaceBox(this.calculateFaceLocation(response))
      // })
      // .catch(err => console.log(err));