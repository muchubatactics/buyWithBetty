import { useEffect, useRef, useState } from 'react';
import styles from '../styles/orderby.module.css';

import PropTypes from 'prop-types';

export default function OrderBy({ cb }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [current, setCurrent] = useState('rating');
  const orderRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClicks);
    return () => {
      document.removeEventListener('mousedown', handleClicks);
    }
  }, []);

  function handleClicks(e) {
    let clickedInside = orderRef && orderRef.current.contains(e.target);
    if (!clickedInside) setIsExpanded(false);
  }

  return (
    <div className={styles.orderby} onClick={() => {setIsExpanded(true)}} ref={orderRef}>
      <span>Order by: </span>
      <span>{current}</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
      </svg>

      <div style={isExpanded ? null : {display: 'none'}}>
        <ul>
          <li onClick={(e) => {
            e.stopPropagation();
            setCurrent('name');
            setIsExpanded(false);
            cb('name');
          }}>
            {
              current == 'name' ? 
              <>
                <span>name</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
              </>
              :
              <span>name</span>
            }
          </li>

          <li onClick={(e) => {
            e.stopPropagation();
            setCurrent('released');
            setIsExpanded(false);
            cb('name');
          }}>
            {
              current == 'released' ? 
              <>
                <span>released</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
              </>
              :
              <span>released</span>
            }
          </li>

          <li onClick={(e) => {
            e.stopPropagation();
            setCurrent('updated');
            setIsExpanded(false);
            cb('name');
          }}>
            {
              current == 'updated' ? 
              <>
                <span>updated</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
              </>
              :
              <span>updated</span>
            }
          </li>

          <li onClick={(e) => {
            e.stopPropagation();
            setCurrent('rating');
            setIsExpanded(false);
            cb('name');
          }}>
            {
              current == 'rating' ? 
              <>
                <span>rating</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
              </>
              :
              <span>rating</span>
            }
          </li>

          <li onClick={(e) => {
            e.stopPropagation();
            setCurrent('metacritic');
            setIsExpanded(false);
            cb('name');
          }}>
            {
              current == 'metacritic' ? 
              <>
                <span>metacritic</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
              </>
              :
              <span>metacritic</span>
            }
          </li>

        </ul>
      </div>
    </div>
  );
}

OrderBy.propTypes = {
  cb: PropTypes.func,
}