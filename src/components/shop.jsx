import Shopheader from "./shopHeader.jsx";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation.jsx";

import shopstyles from '../styles/shop.module.css';

export default function Shop() {
  return (
    <>
      <Shopheader />
      <main className={shopstyles.main}>
        <nav className={shopstyles.sidebar}>
          <Navigation />
        </nav>
        <Outlet className={shopstyles.maingoa}></Outlet>
      </main>
    </>
  );
}