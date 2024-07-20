import PropTypes from 'prop-types';
import styles from '../styles/imageslider.module.css';
import { useState } from 'react';

export default function ImageSlider({images}) {
 
  const [cur, setCur] = useState(0);
  let tmp = 0;

  function handlePrev() {
    setCur(cur ? cur - 1: images.length -1);
  }

  function handleNext() {
    setCur(cur == images.length - 1 ? 0 : cur + 1);
  }

  return (
    <div className={styles.imageslider}>
      <div className={styles.left} onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
      </div>
      <div className={styles.right} onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
        </svg>
      </div>
      <div className={styles.main} style={
        {
          transform: `translateX(-${cur * 66}vw)`
        }
      }>
        {
          images.length ?
          <>
            {
              images.map((img) => {
                // return <div key={tmp++} style={{
                //   backgroundImage: 'url(' + img + ')',
                //   minWidth: '1285.7px',
                //   height: '810px',
                // }}></div>

                return <img src={img} key={tmp++} />
              })
            }
          </>
          :
          <p>no images</p>
        }
      </div>
    </div>
  );

}

ImageSlider.propTypes = {
  images: PropTypes.array,
}