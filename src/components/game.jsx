import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ImageSlider from "./imageslider";
import { Link } from "react-router-dom";

import styles from '../styles/game.module.css';

import res from "./setup.jsx";

export default function Game() {
  const [gameDetails, setGameDetails] = useState(null);
  const location = useLocation();
  const { gameId } = useParams();
  const { screenshots } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);

  console.log(location);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameId}?key=${res.ky}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      let data = {
        name: response.name,
        description: response.description,
        website: response.website,
        released: response.released,
        // genres: response.,
        platforms: [...response.platforms], //an array of objs with platform val
        // developers: response.,
        // publishers: response.,
      };

      setGameDetails(data);
      setIsLoading(false);
    }).catch((err) => {
      console.error(err);
    })
   
    return () => {
      //cleanup
    }
  }, [gameId]);

  return (
    <div className={styles.game}>
      {
        <>
          <div className={styles.heading}>
            <Link to='/shop/games/p' state={ {...location.prev} }>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
              </svg>
              Back to Betty
            </Link>
            {isLoading ? null : <><div>{gameDetails.name}</div></>}
          </div>
          <div className={styles.main}>
            <div>
              <ImageSlider className={styles.slider} images={screenshots} />
            </div>
            <div>
              <div className={styles.description}>
                <h1>Description</h1>
                {isLoading ? null : <><div dangerouslySetInnerHTML={{__html: gameDetails.description}}></div></>}
                <div className={styles.overlay}></div>  
              </div>
              <div className={styles.moredetails}>
                <span>
                  {isLoading ? null : <>Website: <a href={gameDetails.website}>{gameDetails.website}</a></>}
                </span>
                <span>
                  {isLoading ? null : <>Released: {gameDetails.released}</>}
                </span>
                <span>Platforms:
                  {
                    // gameDetails.platforms.map((obj) => {
                    //   return (<p>{obj.platform}</p>);
                    // })
                  }
                </span>
              </div>
              <div>
                <span>$100</span>
                <span>Added</span>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}