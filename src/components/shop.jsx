import Shopheader from "./shopHeader.jsx";
import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div style={{position: 'relative'}}>
      <Shopheader />
      <Outlet /> 
    </div>
  );
}