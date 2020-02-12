import React from 'react';
import { Fade } from 'react-reveal';
import './ExpeditionsMob.css';

const Expeditions = () => (
      <div >
      <div className='hero-exp-container-mob'>
      <div className='hero-exp-bg-mob'>
        <div className='exp-content-wrapper-mob'>
          <div className='exp-mob'>
            <div className='exp-background-image-mob'>
              {/* <div className='ts-color-opacity'> */}
                <div className='exp-content-mob'>
                  <h1>Now Booking Humanitarian Service Trips to Peru & Colombia!</h1>
                </div>
              {/* </div> */}
            </div >
            <div className='exp-background-image2-mob'>
              {/* <div className='ts-color-opacity2'> */}
                <div className='exp-content-mob-color'>
                  <p>Several times per year Generations Humanitarian takes groups to Peru and Colombia to perform humanitarian service. For most, meeting your fellow expedition members, immersing yourself in the culture, serving those in need and working with the children becomes a life-changing experience. Working beside the Latin American poor touches the hearts of those who give and those who receive. Our expeditions are carried out in a safe and professional way to provide a unique and personal glimpse into the heart and soul of the Latin American world.</p>
                </div>
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Mid Section */}

      <div className='mid-exp-container-mob'>
        <div className='mid-exp-wrapper-mob'>
          <div className='mid-exp-content-mob'>
            <Fade duration={2000}>
            <h1>We Invite You to Join Us In 2017-18</h1>
            </Fade>
            <Fade duration={2000}>
           <p>Expedition projects for 2018 will focus on projects at the Azul Wasi and Anta homes in Peru and helping single mothers of our homes in Colombia. We take high school and college student groups as well as families and individuals. Medical and dental projects may be added to existing construction expeditions as medical personnel sign on. The most important skills on expeditions are hard work and a good attitude. When you sign up, remember you will be going to a developing nation that often lacks the quality of services you expect at home. Things will go wrong. That’s part of the developing world country adventure. Patience and understanding go a long way towards making each of those situations enjoyable instead of frustrating. Our homes in Peru are just a couple of hours away from Machu Picchu, so we will always take time out for a little fun!</p>
           </Fade>
         </div>
         <Fade left>
          <div className='exp-background-img-mob'>
            <div className='ex-color-opacity-mob'>
             <div className='mid-exp-content-photo-mob'>
             </div>
           </div>
          </div>
          </Fade>
        </div>
        <div className='mid-exp-wrapper-mob'>
            <div className='mid-exp-content-mob'>
              <Fade duration={2000}>
             <h1>Celebrate 20 Years <br></br> with Us!</h1>
             </Fade>
            <Fade duration={2000}>
             <p>August, 2018 marks the 20th year that Van Evans and Jaime Figueroa have taken humanitarian expeditions to Peru. Our first expedition was to Patacancha and the Sacred Valley of the Incas. We will return to the remote village of Patacancha (13,000 feet) after 20 years to celebrate with them their development. We expect a number of repeats to go on this trip, so a visit to Machu Picchu is optional. After doing our service for the homes and greenhouses, we will fly back to Lima and then take a bus down the coast to the Atacama desert and enjoy two days of touring the desert. We will visit the mysterious Nazca Lines as well as the Ballesta Islands (Peru’s Galapagos Islands) and the Oasis of Huacachina. Anyone who has been on an expedition with us before can return with a $100 discount.</p>
             </Fade>
          </div>
          <Fade left>
          <div className='exp-background-img2-mob'>
            <div className='ex-color-opacity2-mob'>
              <div className='mid-exp-content-photo-mob'></div>
            </div>
          </div>
          </Fade>
        </div>
      </div>

      {/*  Purple Section */}
      <div className='purple-container-mob'>
        <Fade duration={2000}>
        <div className='purple-words-mob'>
          <h1>A Priceless Experience! <br></br> Sign Up Today!</h1>
            <span className="line-mob"></span>
          <p>Peru, Cusco/Sacred Valley Expedition. December 27, 2018 – January 6, 2019. Cost $1875.
              Download the Expedition Application</p>

        </div>
        </Fade>
        <div className='purple-pics-wrapper-mob'>
          <Fade left>
          <div className='purp-img-flex-mob'>
          <div className='purple-img2-mob'></div>
          </div>
          </Fade>
          <Fade left>
          <div className='purp-img-flex-mob'>
          <div className='purple-img3-mob'></div>
          </div>
          </Fade>
          <Fade left>
          <div className='purp-img-flex-mob'>
          <div className='purple-img4-mob'></div>
          </div>
          </Fade>
          <Fade left>
          <div className='purp-img-flex-mob'>
          <div className='purple-img5-mob'></div>
          </div>
          </Fade>
        </div>
      </div>
      </div>
)
  
  

export default Expeditions;