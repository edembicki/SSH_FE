import React from 'react';
import { Breadcrumb } from "antd";
import {
  Card,
  Col,
  Row
} from 'antd';
import './Dashboard.scss';
import { Content, Header } from 'antd/es/layout/layout';
import MenuComponent from '../../components/menu/Menu.component';
import LocationStoresChart from '../../components/location-stores-chart';

const Dashboard: React.FC = () => {
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
      <Content
        style={{
          padding: 24,
          minHeight: 600,
          width: '80%',
          margin: '0 auto'
        }}
      >
        <Breadcrumb style={{ margin: '16px', fontSize: '30px', fontWeight: 900 }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={48}>
          <Col xs={24} sm={24} md={24} lg={4} xl={4}>
            <Card
              style={{ marginTop: 16, borderTop: '10px solid #4989C3' }}
            >
              <p style={{padding: '6px', background: '#F2EED0', borderRadius: '10px', textAlign: 'center', width: '5rem'}}>Coins</p>
              <p style={{fontSize: 20, margin: 0, fontWeight: 900}}>$1.000</p>
              <p>Last coins earned<br /> <small>KFC - store 408 8th ave</small></p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={4} xl={4}>
            <Card
              style={{ marginTop: 16, borderTop: '10px solid #4989C3' }}
            >
              <p style={{padding: '6px', background: '#F2EED0', borderRadius: '10px', textAlign: 'center', width: '5rem'}}>Tickets</p>
              <p style={{fontSize: 20, margin: 0, fontWeight: 900}}>$1.000</p>
              <p>Last coins earned<br /> <small>KFC - store 408 8th ave</small></p>
            </Card>
          </Col>
          <Col xs={2} lg={2} style={{borderRight: '4px solid #80808024'}}>
          </Col>
          <Col xs={2} lg={2}>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>            
            <Card
              style={{ marginTop: 16, background: 'none' }}
            >
              <LocationStoresChart />              
            </Card>               
          </Col>
        </Row>
      </Content>
      
    </React.Fragment>
  );
};

export default Dashboard;
