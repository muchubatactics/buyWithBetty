import { Link, useLocation } from "react-router-dom";

import styles from '../styles/games.module.css';
import { useEffect, useState } from "react";
import Loading from "./loading.jsx";

import res from "./setup.jsx";
import OrderBy from "./orderby.jsx";

export default function Games() {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [display, setDisplay] = useState(0);

  // no ordering on all time top
  const [order, setOrder] = useState('-rating');

  const location = useLocation();

  function buildQuery(str) {
    let url =`${res.baseURL}games?key=${res.ky}&page_size=${res.page_size}`;

    let year = res.date.getFullYear();
    let month = res.date.getMonth();
    let day = res.date.getDate();

    if (str == 'Best of the year') return url + `&dates=${year}-01-01,${year}-12-31`;

    if (str[0] == 'P') return url + `&dates=${year - 1}-01-01,${year - 1}-12-31`;

    // last 30 days
    let month1;
    let year1;
    if (month == 1) {
      year1 = year - 1;
      month1 = 12;
    } else {
      month1 = month - 1;
      year1 = year;
    }

    if (month < 9) month = `0${month}`;
    if (month1 < 9) month1 = `0${month1}`;
    if (day < 9) day = `0${day}`;
    
    if (str == 'Last 30 days') return url + `&dates=${year1}-${month1}-${day},${year}-${month}-${day}`;

    //this week
    year = res.date.getFullYear();
    month = res.date.getMonth();
    day = res.date.getDate();
    
    month1 = month;
    let month2;
    let yearr1 = year, yearr2 = year;
    let day2;
    let dayOfWeek = res.date.getDay();
    let day1 = day - dayOfWeek;

    if (day1 < 0) {
      day1 += 30;
      month1 = month - 1;

      if (!month1) {
        month1 = 12;
        yearr1 = year - 1;
      }

      day2 = day + 6 - dayOfWeek;
      month2 = month;
    } else {
      day2 = day1 + 6;
      month1 = month;
      month2 = month;

      if (day2 > 31) {
        day2 -= 30;
        month2 = month + 1;
        if(month2 > 12) {
          month2 = 1;
          yearr2 = year + 1;
        }
      }

    }

    if (day1 < 9) day1 = `0${day1}`;
    if (day2 < 9) day2 = `0${day2}`;
    if (month1 < 9) month1 = `0${month1}`;
    if (month2 < 9) month2 = `0${month2}`;

    if (str == 'This week') return url + `&dates=${yearr1}-${month1}-${day1},${yearr2}-${month2}-${day2}`;


    // next week;
    day1 = day + 7 - dayOfWeek;
    day2 = day1 + 6;
    yearr1 = year; yearr2 = year;

    if (day1 < 31) month1 = month;
    else {
      day1 -= 30;
      month1 = month + 1;
      
      if (month1 > 12) {
        month1 = 1;
        yearr1 = year + 1;
      }
    }

    if (day2 < 31) month2 = month;
    else {
      day2 -= 30;
      month2 = month + 1;

      if (month2 > 12) {
        month2 = 1;
        yearr2 = year + 1;
      }
    }

    if (day1 < 9) day1 = `0${day1}`;
    if (day2 < 9) day2 = `0${day2}`;
    if (month1 < 9) month1 = `0${month1}`;
    if (month2 < 9) month2 = `0${month2}`;

    if (str == 'Next week') return url + `&dates=${yearr1}-${month1}-${day1},${yearr2}-${month2}-${day2}`;
  }

  useEffect(() => {
    setLoading(true);
    let result = [];

    let url;
    if (location.state && location.state.query) url = location.state.query;
    else {
      url =`${res.baseURL}games?key=${res.ky}&page_size=${res.page_size}`;

      if (location.state && location.state.type == 'genre') url += `&genres=${location.state.id}`;
      if (location.state && location.state.type == 'platform') url += `&parent_platforms=${location.state.id}`;

      if (location.state && location.state.type == 'date') {
        url = buildQuery(location.state.name);
      }
    }
    
    if (location.state && location.state.name !== 'All time top') url += `&ordering=${order}`;

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
          screenshots: Response.results[i].short_screenshots ? [...Response.results[i].short_screenshots] : [],
        }

        obj.platforms = Response.results[i].parent_platforms ? Response.results[i].parent_platforms.map((ptf) => {
          return ptf.platform.slug;
        }) : [];

        // console.log(Response.results[i].metacritic, Response.results[i].rating, Response.results[i].released);

        result.push(obj);
      }

      setGames(result);
      setLoading(false);
      
    }).catch((err) => {
      console.error(err);
    }).finally(() => {});

    return () => {

    }
  }, [location.state, order]);


  return (
    <div className={styles.games}>
      <h1>{location.state ? location.state.name : 'All time top'}</h1>
      <div className={styles.custom}>

        {
          !location.state || location.state.name == 'All time top' ? <div></div> : <OrderBy cb={setOrder}/>
        }

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
            games.length ? 
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
                      {
                        res.cartFunctionality.doesContain(game.id) ? 
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
                          });
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
            })
            :
            <h1>Nothing!</h1>
          }
        </main>
      }

    </div>
  );
}