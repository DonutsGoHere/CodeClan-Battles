import { StartGameNarrator } from 'components/Menus/StartMenu/StartGameNarrator';
import styles from './styles.module.css';

export const LeaderBoard = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <StartGameNarrator
        script={`${winner.name} has completed their journey. Click here to begin anew.`}
        viewModeClick={onStartClick}
      />
    </div>
  );
};
