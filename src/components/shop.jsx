import Shopheader from "./shopHeader.jsx";
import PageTransitionWrapper from "./pageTransitions.jsx";
import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div style={{position: 'relative', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column'}}>
      <Shopheader />
      <PageTransitionWrapper>
        <Outlet />
      </PageTransitionWrapper>
    </div>
  );
}