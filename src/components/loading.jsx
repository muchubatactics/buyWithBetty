import styles from '../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <svg viewBox="25 25 50 50">
        <circle className={styles.circle} cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
}