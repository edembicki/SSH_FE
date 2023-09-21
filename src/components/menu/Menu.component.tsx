import { Menu } from "antd";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";

type MenuItem = {
  key: React.Key;
  icon?: React.ReactNode;
  label: React.ReactNode;
  path: string;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: string,
  icon?: React.ReactNode,  
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    path
  } as MenuItem;
}



const items: MenuItem[] = [
  getItem('', '1', '/dashboard', <i className="fa-solid fa-ranking-star"></i>),
  getItem('', '2', '/tracker', <i className="fa-solid fa-location-dot"></i>),
  getItem('', '3', '/wallet', <i className="fa-solid fa-wallet"></i>),
  getItem('', '4', '/profile', <i className="fa-solid fa-user-gear"></i>),
];



const MenuComponent: React.FC = () => {
  const url = window.location.pathname
  const currentKey = items.find(item => item?.path === url)
  const [selectedItem, setSelectedItem] = useState<string[]>([String(currentKey?.key)])
  const navigate = useNavigate()
  const handleOnClick = (e: any) => {    
    const navigateTo = items.find(item => item?.key === e.key)
    if (navigateTo && navigateTo.path) {
      navigate(navigateTo.path)      
    }    
    setSelectedItem([e.key])
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={selectedItem} selectedKeys={selectedItem} mode="horizontal" items={items} onClick={(e) => 
        handleOnClick(e)}/>
  )
}

export default MenuComponent
