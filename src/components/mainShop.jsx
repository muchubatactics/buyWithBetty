import { Outlet } from "react-router-dom";
import Navigation from "./navigation.jsx";

import shopstyles from '../styles/shop.module.css';

export default function MainShop() {
  return (
      <main className={shopstyles.main}>
        <nav className={shopstyles.sidebar}>
          <Navigation />
        </nav>
        <Outlet></Outlet>
      </main> 
  );
}