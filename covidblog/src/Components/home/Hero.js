import React from 'react';
import { Button } from 'antd';
import './Contact.css';
import { Carousel } from 'antd';
import { useHistory } from 'react-router-dom';

const items = [
  {
    key: '1',
    title: 'We’re here for you, from the comfort of home.',
    content:
      'At CovidSafe, we want to make sure that we are providing you with the information you need to stay informed about COVID-19 and the COVID-19 vaccine. ',
  },
  {
    key: '2',
    title: 'Work better together.',
    content:
      'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content:
      'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
];

function Hero() {
  const history = useHistory();
  const explore = (event) => {
    event.preventDefault(); //this stop the refresh
    //looged in redirect to homepage
    history.push('/Videos');
  };
  return (
    <div id='hero' className='heroBlock'>
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className='container-fluid'>
              <div className='content'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className='btnHolder'>
                  <Button onClick={explore} type='primary' size='large'>
                    Learn More
                  </Button>
                  <Button onClick={explore} size='large'>
                    <i className='fas fa-desktop'></i> Watch We Care
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
