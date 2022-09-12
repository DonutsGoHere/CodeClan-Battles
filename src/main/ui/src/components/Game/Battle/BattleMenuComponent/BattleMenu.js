import styles from './styles.module.css';

import { GiPointySword, GiHealthPotion } from 'react-icons/gi';

export const BattleMenu = ({ onAttack, onPotion }) => {
  return (
    <div className={styles.main}>
      <div onClick={onAttack} className={styles.menuButton}>
        <GiPointySword className={styles.image} />
      </div>
      <div onClick={onPotion} className={styles.menuButton}>
        <GiHealthPotion className={styles.image} />
      </div>
    </div>
  );
};
