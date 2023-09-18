import { Menu, MenuProps } from "antd";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
  getItem('', '1', <i className="fa-solid fa-ranking-star"></i>),
  getItem('', '2', <i className="fa-solid fa-location-dot"></i>),
  getItem('', '3', <i className="fa-solid fa-wallet"></i>),
  getItem('', '4', <i className="fa-solid fa-user-gear"></i>),
];

const MenuComponent: React.FC = () => {
  
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal" items={items} />
  )
}

export default MenuComponent
