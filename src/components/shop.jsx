import Shopheader from "./shopHeader.jsx";
import { Link, Outlet } from "react-router-dom";

import shopstyles from '../styles/shop.module.css';

export default function Shop() {
  return (
    <>
      <Shopheader />
      <main>
        <nav className={shopstyles.sidebar}>
          <Link></Link>
        </nav>
        <Outlet className={shopstyles.maingoa}></Outlet>
      </main>
    </>
  );
}