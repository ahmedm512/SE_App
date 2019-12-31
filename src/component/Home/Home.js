import React from 'react';
import './Home.css'


const Home = ({onRouteChange}) => {
	
	return(
<div>
<article class="vh-100 dt w-100">
<div class="dtc v-mid tc white ph3 ph4-l">
<section id="rides" class="main__rides" aria-label="Swvl lines and rides" aria-describedby="swvl-lines swvl-rides">
        <div class="container">
          <div class="rides__line">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">Mohandessin</span>
                      <span>5th Settlement</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">6th of October</span>
                      <span>Maadi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">5th Settlement</span>
                      <span>Smart Village</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5 d-none d-md-block">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">Nasr City</span>
                      <span>6th of October</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5 d-none d-md-block">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">Hadayek Al Ahram</span>
                      <span>5th Settlement</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4 mb-5 d-none d-md-block">
                <div class="rides__card">
                  <div class="rides__info d-flex align-items-center">
                    <div>
                      <span class="d-block mb-2">Heliopolis</span>
                      <span>Smart Village</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rides__statistic text-center">
            
            <p id="swvl-rides" class="info__description mb-5">
              Your only way to a better daily commute.
            </p>
            <p onClick={() => onRouteChange('register')} class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red pointer">Register Now</p>
          </div>
        </div>
      </section>
    </div>
  </article>

 <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>About</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Get Started</a></li>
            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Videos</a></li>
          </ul>
        </div>
      </div>  
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
          <p class="h6">&copy All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
        </div>
      </div>  
    </div>
  </section>
</div>

		);
}

export default Home;