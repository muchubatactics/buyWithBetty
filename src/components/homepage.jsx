import { AnimLogo } from './logo.jsx';

import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
     {/* <Logo /> */}
     <AnimLogo />
     <Link to='/shop'>Start Shopping</Link>
    </>
  );
}