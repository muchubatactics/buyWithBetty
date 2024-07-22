import { Link, useParams } from "react-router-dom";

import styles from '../styles/games.module.css';
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";

export default function Games() {
  let { gamesId } = useParams();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const ky = '0d8f5888225b4c37b78af65363f639cd';
  // const ky = '';

  useEffect(() => {
    let res = [];

    fetch(`https://api.rawg.io/api/games?key=${ky}`, {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-type': 'application/json',
      }
    }).then((Response) => {
      return Response.json();
    }).then((Response) => {
      for (let i = 0; i < Response.results.length; i++) {
        let obj = {
          id: Response.results[i].id,
          name: Response.results[i].name,
          background_image: Response.results[i].background_image,
          release_date: Response.results[i].released,
          dominant_color: Response.results[i].dominant_color,
          genres: null,
          platforms: null,
          screenshots: [...Response.results[i].short_screenshots],
        }

        res.push(obj);
      }

      setGames(res);
      setLoading(false);
      
    }).catch((err) => {
      console.error(err);
    }).finally(() => {});

    return () => {

    }
  }, []);


  return (
    <div className={styles.games}>
      <h1>{gamesId}</h1>
      <div className={styles.custom}>
        <div>
          <span>Display options: </span>
          <button>many</button>
          <button>single</button>
        </div>
      </div>
      {
        loading ?
        <Loading />
        :
        <main>
          {
            games.map((game) => {
              let imgs = [];
              for (let i = 0; i < game.screenshots.length; i++) {
                imgs.push(game.screenshots[i].image);
              }
              let str = `/shop/game/${game.id}`;
              return (
                <div className={styles.game} key={game.id}>
                  <Link to={str} state={{ screenshots: [...imgs] }} >
                    <img src={game.background_image} alt="" />
                  </Link>
                  <div>
                    <div>
                      <span>Add to cart</span>
                      <span>$49.9</span>
                    </div>
                    <div>Platforms</div>
                    <Link to={str} state={{ screenshots: [...imgs] }} >
                      <span>{game.name}</span>
                    </Link>
                  </div>
                </div>

              );
            })
          }
        </main>
      }

    </div>
  );
}