import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  CodepenOutlined,
  DesktopOutlined,
  UserOutlined
} from '@ant-design/icons';
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
  getItem('', '1', <AppstoreOutlined />),
  getItem('', '2', <DesktopOutlined />),
  getItem('', '3', <CodepenOutlined />),
  getItem('', '4', <UserOutlined />),
];

const MenuComponent: React.FC = () => {
  
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal" items={items} />
  )
}

export default MenuComponent
