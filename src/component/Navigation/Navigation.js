import React from 'react';

import './Navigation.css'


const Navigation = ({ onRouteChange, isSignedIn, onBarClick, isAdmin}) => {
   
 if (isSignedIn) {
      return (
 <nav className="pt3 flex justify-between h3 bb b--light-gray bg-near-white">
<p className="link dark-gray hover-gray no-underline flex items-center pa3 pointer">
<img alt="Bus Logo" src="https://img.icons8.com/ios-filled/50/000000/bus.png"/>
</p>

<div className="flex pa3 items-center transition-transform dn-l" id="hamburger">
<p onClick={()=> onBarClick()} className="f4 link dib dark-gray dim mr3 mr4-ns rotate-90 pointer" >|||</p>
</div>

<div  onClick={()=> onBarClick()} className=" pa4 pa3-l flex-l items-center h-100 h-inherit-l fixed relative-l top-0 right-0 transition-transform transform-off bg-near-white bl b--light-gray bn-l" id="sidebar" >

<p onClick={() => onRouteChange('signout')} className="db f6 near-white bg-animate bg-hot-pink hover-bg-dark-gray no-underline pv3 ph4 br2 pointer" >Sign Out</p>
</div>
</nav>
      );
    } 

else {
      return (
 <nav className="pt3 flex justify-between h3 bb b--light-gray bg-near-white">
<p className="link dark-gray hover-gray no-underline flex items-center pa3 pointer">
<img alt="Bus Logo" src="https://img.icons8.com/ios-filled/50/000000/bus.png"/>
</p>

<div className="flex pa3 items-center transition-transform dn-l" id="hamburger">
<p onClick={()=> onBarClick()} className="f4 link dib dark-gray dim mr3 mr4-ns rotate-90 pointer" >|||</p>
</div>

<div  onClick={()=> onBarClick()} className=" pa4 pa3-l flex-l items-center h-100 h-inherit-l fixed relative-l top-0 right-0 transition-transform transform-off bg-near-white bl b--light-gray bn-l" id="sidebar" >
<p onClick={() => onRouteChange('home')} className="db mb3 mb0-l pa0-l mb f6 link dark-gray dim mr3 mr4-ns pointer" >Home</p>
<p onClick={() => onRouteChange('signin')} className="db mb3 mb0-l pa0-l f6 link dark-gray dim mr0 mr4-l bb b--light-gray pb3 bn-l pointer" >Sign In</p>
<p onClick={() => onRouteChange('register')} className="db f6 near-white bg-animate bg-hot-pink hover-bg-dark-gray no-underline pv3 ph4 br2 pointer" >Register</p>
</div>
</nav>


      );
    }
}



export default Navigation;




// <nav className="flex justify-between h3 bb b--light-gray bg-near-white">
// <p className="link dark-gray hover-gray no-underline flex items-center pa3" href="">
// BusRes
// </p>

// <div className="flex pa3 items-center transition-transform dn-l" id="hamburger">
// <p className="f4 link dib dark-gray dim mr3 mr4-ns rotate-90" href="#">|||</p>
// </div>

// <div className=" pa4 pa3-l flex-l items-center h-100 h-inherit-l fixed relative-l top-0 right-0 transition-transform transform-off bg-near-white bl b--light-gray bn-l" id="sidebar" >
// <p className="db mb3 mb0-l pa0-l mb f6 link dark-gray dim mr3 mr4-ns" >Home</p>
// <p onClick={() => onRouteChange('signin')} className="db mb3 mb0-l pa0-l f6 link dark-gray dim mr0 mr4-l bb b--light-gray pb3 bn-l" >Sign In</p>
// <p onClick={() => onRouteChange('register')} className="db f6 near-white bg-animate bg-hot-pink hover-bg-dark-gray no-underline pv3 ph4 br2" >Register</p>
// </div>
// </nav>


// // <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
// //           <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
// //         </nav> 


// <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
//           <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
//           <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
//         // </nav>