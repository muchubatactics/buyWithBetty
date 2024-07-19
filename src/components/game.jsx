import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Game() {
  const [gameDetails, setGameDetails] = useState(null);
  const location = useLocation();
  const { gameId } = useParams();
  const { screenshots } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);

  const ky = '';
  // const ky = '0d8f5888225b4c37b78af65363f639cd';

  console.log(screenshots);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameId}?key=${ky}`, {
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
  }, [gameId])
  return (
    <>
      {
        isLoading ? <p>loading...</p>
        :
        <>
          <h1>{gameDetails.name}</h1>
          <div>
            {/* {
              screenshots.map((img) => {
                return (<img src={img} alt=""/>)
              })
            } */}
          </div>
          <h1>Description</h1>
          {gameDetails.description}
          <h4>Website</h4>
          <p>{gameDetails.website}</p>
          <h4>Released</h4>
          <p>{gameDetails.released}</p>
          <h4>Platforms</h4>
          {/* {
            gameDetails.platforms.map((obj) => {
              return (<p>{obj.platform}</p>);
            })
          } */}
        </>
      }
    </>
  );
}