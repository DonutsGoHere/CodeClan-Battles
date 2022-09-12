import styles from './styles.module.css';

export const EndMenu = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <h2>{winner.name} has won!</h2>
    </div>
  );
};
