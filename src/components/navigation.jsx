import { Link } from "react-router-dom";

import styles from '../styles/navigation.module.css';
import { useState } from "react";

import res from './setup.jsx';

export default function Navigation() {
  const [selected, setSelected] = useState('');
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [showGenres, setShowGenres] = useState(false);

  let countP = 0, countG = 0

  let d = new Date();

  function handleClick(str) {
    setSelected(str);
  }

  return (
    <div className={styles.navigation}>
      <p>New Releases</p>
      <Link to='p' state={{name: 'Last 30 days', type: 'date'}} className={selected == 'Last 30 days' ? styles.selected : ''} onClick={() => { handleClick('Last 30 days') }}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
        </div>
        <div>Last 30 days</div>
      </Link>
      <Link to='p' state={{name: 'This week', type: 'date'}} className={selected == 'This week' ? styles.selected : ''} onClick={() => { handleClick('This week') }}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>fire</title><path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" /></svg>
        </div>
        <div>This week</div>
      </Link>
      <Link to='p' state={{name: 'Last week', type: 'date'}} className={selected == 'Next week' ? styles.selected : ''} onClick={() => { handleClick('Next week') }}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16"><path d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"></path></svg>
        </div>
        <div>Next week</div>
      </Link>

      <p>Top</p>
      <Link to='p'  state={{name: 'Best of the year', type: 'date'}} className={selected == 'Best of the year' ? styles.selected : ''} onClick={() => { handleClick('Best of the year') }}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trophy</title><path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" /></svg>
        </div>
        <div>Best of the year</div>
      </Link>
      <Link to='p' state={{name: 'Popular in ' + String(d.getFullYear() - 1), type: 'date'}} className={selected == 'Popular' ? styles.selected : ''} onClick={ () => handleClick('Popular') }>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16"><path d="M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z"></path></svg>
        </div>
        <div>Popular in {d.getFullYear() - 1}</div>
      </Link>
      <Link to='p' state={{name: 'All time top', type: 'other'}} className={selected == 'All time top' ? styles.selected : ''} onClick={() => { handleClick('All time top') }}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>crown</title><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" /></svg>
        </div>
        <div>All time top</div>
      </Link>

      <p>Platforms</p>
  
      {
        res.platforms.map((platform) => {
          countP++;
          if (!showPlatforms && countP > 3) return null;
          return (
            <Link to='p' state={{name: platform.name, type: 'platform', id: platform.id}} className={selected == platform.name ? styles.selected : ''} onClick={() => { handleClick(platform.name) }} key={platform.id}>
              <div>
                {
                  platform.icon
                }
              </div>
              <div>{platform.name}</div>
            </Link>
          );
        })
      }

      <button onClick={() => {setShowPlatforms((prev) => prev ? false : true)}}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={showPlatforms ? {transform: 'rotate(180deg)'} : {}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div>
        <div>{ showPlatforms ? 'Hide' : 'Show all'}</div>
      </button>

      <p>Genres</p>      

      {
        res.genres.map((genre) => {
          countG++;
          if (!showGenres && countG > 3) return null;
          return (
            <Link to='p'  state={{name: genre.name, type: 'genre', id: genre.id}} className={selected === genre.name ? styles.selected : ''} onClick={() => { handleClick(genre.name) }} key={genre.id}>
              <div>
                {genre.icon || <img src={genre["image_background"]} alt="" /> }
              </div>
              <div>{genre.name}</div>
            </Link>
          );
        })
      }

      <button onClick={() => {setShowGenres((prev) => prev ? false : true)}}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style={showGenres ? {transform: 'rotate(180deg)'} : {}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div>
        <div>{ showGenres ? 'Hide' : 'Show all'}</div>
      </button>

    </div>
  );
}