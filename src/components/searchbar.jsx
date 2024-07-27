import { useState } from 'react';
import styles from '../styles/searchbar.module.css';
import res from './setup.jsx';
import Loading from './loading.jsx';
import { Link, useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const [isfocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [foundGames, setFoundGames] = useState(null);
  const navigate = useNavigate();

  let str = styles.container;
  if (isfocused) str += (" " + styles.focusedon);

  function handleBlur() {
    setIsFocused(false);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleChange(e) {
    setIsLoading(true);
    let result = [];
    let str = e.target.value;

    if (!str) {      
      setIsLoading(false);
      setFoundGames(null);
      return;
    }

    fetch(`${res.baseURL}games?key=${res.ky}&search=${str}&page_size=5`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {

      for (let i = 0; i < response.results.length; i++) {
        let obj = {
          id: response.results[i].id,
          name: response.results[i].name,
          background_image: response.results[i].background_image,
          platforms: null,
          screenshots: [...response.results[i].short_screenshots],
        }

        obj.platforms = response.results[i].parent_platforms.map((ptf) => {
          return ptf.platform.slug;
        });

        result.push(obj);
      }

      setIsLoading(false);
      setFoundGames({count: response.count, result});

    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      if (!e.target.value) {
        setIsLoading(false);
        setFoundGames(null);
      }
    });

  }

  function handleSubmit(e) {
    e.preventDefault();
    let str = e.target[0].value;

    let query = `${res.baseURL}games?key=${res.ky}&search=${str}&page_size=${res.page_size}&search_exact=true`;

    e.target.reset();
    setIsLoading(false);
    setFoundGames(null);
    setIsFocused(false);

    navigate('/shop/games/p', {
      replace: true,
      state: {
        query: query,
        name: str,
      },
    });

  }

  return(
    <div className={str}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </label>
        <input autoComplete='off' type="text" name="search" id="search" onFocus={handleFocus} onBlur={handleBlur} placeholder='Search thousands of games' onChange={handleChange}/>
      </form>
      <div className={styles.dropdown} style={!foundGames && !isLoading ? {display: 'none'} : null}>
        {
          isLoading ? <div className={styles.loading}><Loading /></div> : foundGames ? (
            <>
              <h2>Games <span>{foundGames.count}</span></h2>
              {
                foundGames.result.map((game) => {
                  let dest = `/shop/game/${game.id}`;

                  let imgs = [];
                  for (let i = 0; i < game.screenshots.length; i++) {
                    imgs.push(game.screenshots[i].image);
                  }

                  return (
                    <div key={game.id}>
                      <Link to={dest} state={{ screenshots: [...imgs], prev: null }} onClick={() => {
                        setFoundGames(null);
                        setIsLoading(false);
                      }}>
                        <div style={ { backgroundImage: 'url(' + game.background_image + ')' } }></div>
                      </Link>
                      <div>
                        <div>
                          {
                            game.platforms.map((ptf, i) => {
                              return <svg style={{color: 'white'}}key={i}>{res.platform_icons[ptf]}</svg>;
                            })
                          }
                        </div>
                        <Link to={dest} state={{ screenshots: [...imgs], prev: null }} onClick={() => {
                          setFoundGames(null);
                          setIsLoading(false);
                        }}>
                          {game.name}
                        </Link>
                      </div>
                    </div>
                  );
                })
              }
            </>
          ) : null
        }
      </div>
    </div>
  );
}