import React from 'react';
import './Contact.css';
import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i class='fab fa-simplybuilt'></i>,
    title: 'Easy to use',
    content:
      'Ultimately, the app must be user-friendly, easy to navigate as well as visually appealing.',
  },
  {
    key: '2',
    icon: <i className='fas fa-desktop'></i>,
    title: 'Grow Community',
    content:
      'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i class='fas fa-users'></i>,
    title: 'Social Awareness',
    content:
      'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
];

function AboutUs() {
  return (
    <div id='about' className='block aboutBlock'>
      {
        
      }
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>About Us</h2>
          <p>Everyday care with safety in mind.</p>
        </div>
        <div className='contentHolder'>
          <p>
            Everyday health is still important. To ensure you and your family
            continue getting the care you need, CovidSafe is committed to
            protecting you and your loved ones by providing a safe place for
            care during these times. With options like Live News Feed,Real time
            Blog post, urgent care services many more.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className='content'>
                  <div className='icon'>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;
