import styles from '../styles/gamecard.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import res from './setup';

import { useState } from 'react';


export default function GameCard({ str, game, imgs, displayStyle}) {

  const [isAdded, setIsAdded] = useState(res.cartFunctionality.doesContain(game.id));

  return (
    <div className={displayStyle ? `${styles.game} ${styles.single}` : styles.game} key={game.id}>
      <Link to={str} state={{ screenshots: [...imgs], prev: {...location.state} }} >
        <img src={game.background_image} alt="" />
      </Link>
      <div>
        <div>
          {
            isAdded ? 
            <span className={styles.alreadyadded}>
              Added
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
              </svg>
            </span>
            :
            <span onClick={() => {
              res.cartFunctionality.addToCart({ 
                image: game.background_image,
                name: game.name,
                id: game.id,
                price: 49.9,
              }, setIsAdded);
            }}>Add to cart +</span>
          }
          <span>$49.9</span>
        </div>
        <div>
          {
            game.platforms.map((ptf, i) => {
              return <svg key={i}>{res.platform_icons[ptf]}</svg>;
            })
          }
        </div>
        <Link to={str} state={{ screenshots: [...imgs], prev: {...location.state} }} >
          <span>{game.name}</span>
        </Link>
      </div>
    </div>

  );
}

GameCard.propTypes = {
  str: PropTypes.string,
  game: PropTypes.object,
  imgs: PropTypes.array,
  displayStyle: PropTypes.number, //bool 1 / 0
}