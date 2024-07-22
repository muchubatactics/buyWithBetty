import { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import styles from '../styles/pagetransition.module.css';

export default function PageTransitionWrapper() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  console.log('loc=>', location,'dis=>', displayLocation);

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage('fadeOut');
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 800);
    }
  }, [transitionStage, location]);

  return (
    <div className={`${styles.pagetransition} ${transitionStage == 'fadeIn' ? styles.fadeIn : styles.fadeOut}`}>
      <Outlet />
    </div>
  );
}
