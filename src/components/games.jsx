import { Link, useLocation } from "react-router-dom";

import styles from '../styles/games.module.css';
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";

import res from "./setup.jsx";

export default function Games() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const location = useLocation();
  console.log(location);


  useEffect(() => {
    setLoading(true);
    let result = [];

    let url = `${res.baseURL}games?key=${res.ky}`;
    if (location.state && location.state.type == 'genre') url += `&genres=${location.state.id}`;
    if (location.state && location.state.type == 'platform') url += `&parent_platforms=${location.state.id}`;

    fetch(url, {
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

        result.push(obj);
      }

      setGames(result);
      setLoading(false);
      
    }).catch((err) => {
      console.error(err);
    }).finally(() => {});

    return () => {

    }
  }, [location.state]);


  return (
    <div className={styles.games}>
      <h1>{location.state ? location.state.name : 'All time top'}</h1>
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
                  <Link to={str} state={{ screenshots: [...imgs], prev: {...location.state} }} >
                    <img src={game.background_image} alt="" />
                  </Link>
                  <div>
                    <div>
                      <span>Add to cart</span>
                      <span>$49.9</span>
                    </div>
                    <div>Platforms</div>
                    <Link to={str} state={{ screenshots: [...imgs], prev: {...location.state} }} >
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