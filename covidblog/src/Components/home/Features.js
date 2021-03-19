import React from 'react';
import './Contact.css';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
function Features() {
  return (
    <div id='feature' className='block featureBlock bgGray'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>What CovidSafe Offers</h2>
          <p>Access services and information from CovidSafe</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Modern Design'
                  src='https://www.wabe.org/wp-content/uploads/2020/04/gettyimages-1205434458_custom-f366f2b88c56a0d8791d964607b2b81c29291d0c-710x355.jpg'
                />
              }
            >
              <Meta title='Live News Feed' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Test'
                  src='https://i.ibb.co/zR5xqwf/clean-design.jpg'
                />
              }
            >
              <Meta title='Interactive Expereinces ' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Test'
                  src='https://i.ibb.co/2hV5T7Z/great-support.jpg'
                />
              }
            >
              <Meta title='Blogging' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Test'
                  src='https://i.ibb.co/5rQxM7x/easy-customise.jpg'
                />
              }
            >
              <Meta title='Social Support' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Test'
                  src='https://i.ibb.co/nccHZ0h/unlimited-features.jpg'
                />
              }
            >
              <Meta title='Quick Help' />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt='Test'
                  src='https://i.ibb.co/Y2pCtVp/advanced-option.jpg'
                />
              }
            >
              <Meta title='Covid Information Center' />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Features;
