import { useParams } from "react-router-dom";

import styles from '../styles/games.module.css';

export default function Games() {
  let { gamesId } = useParams();

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

    </div>
  );
}