import { Link, useLocation } from "react-router-dom";

import styles from '../styles/games.module.css';
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";

import res from "./setup.jsx";

export default function Games() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [display, setDisplay] = useState(0);

  const location = useLocation();


  useEffect(() => {
    setLoading(true);
    let result = [];

    let url = `${res.baseURL}games?key=${res.ky}&page_size=${res.page_size}`;
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

        obj.platforms = Response.results[i].parent_platforms.map((ptf) => {
          return ptf.platform.slug;
        })


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
          <div onClick={() => setDisplay(0)} className={!display ? styles.curdisplay : null}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z"/>
            </svg>
          </div>
          <div onClick={() => setDisplay(1)} className={display ? styles.curdisplay : null}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-560v160-160Zm0 400v160-160Z"/>
            </svg>
          </div>
        </div>
      </div>
      {
        loading ?
        <Loading />
        :
        <main className={display ? styles.single : null}>
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
                      <span>Add to cart +</span>
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
            })
          }
        </main>
      }

    </div>
  );
}