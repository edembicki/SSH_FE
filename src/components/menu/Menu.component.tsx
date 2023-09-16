import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider"
import { useState } from "react";
import {
  AppstoreOutlined,
  BuildOutlined,
  CodepenOutlined,
  DesktopOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <AppstoreOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 2', '3', <CodepenOutlined />),
  getItem('Option 2', '4', <UserOutlined />),
  getItem('Files', '5', <BuildOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
];

const MenuContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);  
  
  return (
    <React.Fragment>
      <Sider collapsedWidth={70} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" style={{marginLeft: '10px', marginBottom: '5rem'}}>
              <svg width="46" height="64" viewBox="0 0 46 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_22_2737)">
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Content style={{ margin: '0 16px' }}>  
      </Content>
      <Footer style={{ textAlign: 'center' }}>EDEMBICKI ©2023 Created by Eduardo Dembicki</Footer>
    </React.Fragment>
  )
}

export default MenuContainer
