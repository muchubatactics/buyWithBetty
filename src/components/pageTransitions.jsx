import { Outlet } from 'react-router-dom';
import styles from '../styles/pagetransition.module.css';

export default function PageTransitionWrapper() {
  return (
    <div className={`${styles.pagetransition} ${styles.fadeIn}`}>
      <Outlet />
    </div>
  );
}
