import { Logo } from "./logo";
import { Link } from "react-router-dom";
import Searchbar from "./searchbar";

import '../styles/shopheader.css';
import { useEffect, useState } from "react";

export default function Shopheader() {
  const [showDialog, setShowDiaog] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  /// very very very naughty. One could even say, DIRTY!!
  if (showDialog) {
    document.getElementById('root').classList.add('no-scroll');
  } else {
    document.getElementById('root').classList.remove('no-scroll');
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleSroll() {
      let currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) setScrollDirection('down');
      else setScrollDirection('up');

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleSroll)
    return () => {
      window.removeEventListener('scroll', handleSroll);
    }
  }, [])

  return (
    <header className={scrollDirection === 'down' ? "shopheader down" : "shopheader up"}>
      <Link to='/' className="logolink"><Logo /></Link>
      <Searchbar />
      <div className="cart" onClick={()=>{setShowDiaog(true)}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
        </svg>
      </div>
      <div className={showDialog ? "dialoghelp on" : "dialoghelp off"} onClick={() => {setShowDiaog(false)}}>
        <div className={showDialog ? "cart-itself on": "cart-itself"} onClick={(e) => {e.stopPropagation()}}></div>
      </div>
    </header>
  ); 
}