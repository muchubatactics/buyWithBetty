import Shopheader from "./shopHeader.jsx";
import PageTransitionWrapper from "./pageTransitions.jsx";
import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div style={{position: 'relative'}}>
      <Shopheader />
      <PageTransitionWrapper>
        <Outlet />
      </PageTransitionWrapper>
    </div>
  );
}