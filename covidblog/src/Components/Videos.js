import React from 'react';
import Footer from './Footer';

import './Videos.css';

function Videos() {
  return (
    <div className='vid'>
      {/* <div className="blog">
            <h1>Videos</h1>
            <p>Get more insights into the current environmental crisis with Bob, the worthy janitor.</p>
            <img src="https://i.ibb.co/K7H9khR/Screenshot-2020-12-14-at-12-27-51-AM.png" />
            </div> */}
      <div className='home_player'>
        <iframe
          width='560'
          height='400'
          src='https://www.youtube.com/embed/7tgm8KBlCtE'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen='allowfullscreen'
        ></iframe>
      </div>
      <div className='section_one'>
        <h1>Everyday care with safety in mind | CovidSafe</h1>
      </div>
      <div className='section_two'>
        <p>
          Everyday health is still important.
          <p>
            To ensure you and your family continue getting the care you need,
            we’re practicing rigorous safety measures at all our facilities, as
            well as offering telehealth.
          </p>
        </p>
      </div>

      <div className='blog_card'>
        <div className='video_section'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/DCdxsnRF1Fk'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <h1>10 Tips for Staying Safe in the Era of COVID-19 </h1>
        </div>

        <div className='video_section'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/9DYaBzFPbcs'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>

          <h1>10 Tips for Staying Safe in the Era of COVID-19 </h1>
        </div>

        <div className='video_section'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/xVu_I6WCsto'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <h1>10 Tips for Staying Safe in the Era of COVID-19 </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Videos;
