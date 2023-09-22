/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Wallet.scss';
import { Content, Header } from 'antd/es/layout/layout';
import MenuComponent from '../../components/menu/Menu.component';
import ChartCoins from '../../components/chart-coins';
import { Breadcrumb, Row, Col, Card, InputNumber, Select, Button, Modal } from 'antd';
import Calendar from '../../components/datePicker';
import ChartTickets from '../../components/chart-tickets';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="add" style={{ width: 60 }}>
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);
const Wallet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <React.Fragment>
      <Header>
        <div className="demo-logo-vertical" style={{marginTop: '20px', textAlign: 'center'}}>
            <svg width="26" height="44" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_22_2737)">
              <path d="M45.6639 0.189148L31.5398 16.2018L14.4206 16.2301L0.233384 0.189148V32.3026C0.230888 32.3411 0.238245 32.4557 0.255453 32.6463C0.28305 32.8743 0.368817 33.0915 0.504517 33.2768L22.9455 63.761L45.3676 33.2768C45.5033 33.0915 45.589 32.8743 45.6166 32.6463C45.6394 32.4891 45.6552 21.67 45.6639 0.189148Z" fill="#FDFBF0"/>
              <path d="M25.6094 58.0035L24.6636 56.9221L31.8297 18.273L44.2545 32.6368L25.6094 58.0035Z" fill="#111111"/>
              <path d="M20.2847 58.0036L1.6333 32.6463L14.0581 18.2826L21.2242 56.9348L20.2847 58.0036Z" fill="#111111"/>
              <path d="M36.8681 33.2516L30.5753 40.487L29.5664 36.048L36.8681 33.2516Z" fill="#FDFBF0"/>
              </g>
              <defs>
              <clipPath id="clip0_22_2737">
              <rect width="45.7143" height="64" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>
      </Header>
      <Header
        style={{
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <MenuComponent />
      </Header>
      <div className='tracker-wrapper' style={{minHeight: 1100, height: 1100, overflow: 'hidden'}}>
        <Content
          style={{
            padding: 24,
            minHeight: 600,
            width: '80%',
            margin: '0 auto'
          }}
        >
          <Breadcrumb style={{ margin: '16px', fontSize: '30px', fontWeight: 900 }}>
            <Breadcrumb.Item>Wallet</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                  style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}
                >
                  <img width={100} src='https://zenix.dexignzone.com/react/demo/static/media/btc1.236bc4505212e45916105a3fb6d82b97.svg' />
                  <div style={{float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'end', marginRight: '2rem'}}>
                    <p style={{fontSize: 30, margin: 0, fontWeight: 900}}>Coins</p>
                    <p style={{fontSize: 30, margin: 0, fontWeight: 900}}>$1.000</p>
                  </div>
                  <p style={{display: 'block'}}>Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable. Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>
                  <Button type="primary" onClick={showModal}>
                    Use coins
                  </Button>
                  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Card
                  style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}
                >
                  <img width={100} src='https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/coupon-discount-icon.png' />
                  <div style={{float: 'right', display: 'flex', flexDirection: 'column', alignItems: 'end', marginRight: '2rem'}}>
                    <p style={{fontSize: 30, margin: 0, fontWeight: 900}}>Coupons</p>
                    <p style={{fontSize: 30, margin: 0, fontWeight: 900}}>5</p>
                  </div>
                  <p style={{display: 'block'}}>Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable. Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>
                  <Button type="primary" onClick={showModal}>
                    Use coupons
                  </Button>
                  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Modal>
                </Card>
              </Col>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}> 
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>            
                <Card
                  style={{ marginTop: 16, padding: 0 }}
                >
                  <InputNumber style={{float: 'right'}} addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
                  <Calendar />
                  <ChartCoins />           
                </Card>               
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>            
                <Card
                  style={{ marginTop: 16, padding: 0 }}
                >
                  <InputNumber style={{float: 'right'}} addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
                  <Calendar />    
                  <ChartTickets />         
                </Card>               
              </Col>
            </Col>
          </Row>
        </Content>
         
      </div>      
    </React.Fragment>
  );
};

export default Wallet;
