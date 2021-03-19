import React from 'react';
import './Contact.css';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function Support() {
  return (
    <div id='faq' className='block faqBlock'>
      <div className='container-fluid'>
        <div className='quickSupport'>
          <h3>Want quick support?</h3>
          <p>All your health information in one place.</p>
          <Button type='primary' size='large'>
            <i className='fas fa-envelope'></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Support;
