import errorstyles from '../styles/errorpage.module.css';
import { Logo } from './logo.jsx';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return(
    <div className={errorstyles.errorpage}>
      <Logo/>
      <p>404 Page Not Found</p>
      <Link to='/'>Return to homepage</Link>
    </div>
  );
}