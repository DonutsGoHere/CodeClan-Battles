import styles from './styles.module.css';

export const EncounterOption = ({
  encounter,
  onClick,
  viewModeClick,
  addCompletedEncounter,
}) => {
  function handleEncounterClick(evt) {
    onClick(encounter);
    viewModeClick('game');
    addCompletedEncounter(encounter.id);
  }

  return (
    <div value="game">
      <button
        className={styles.option}
        onClick={handleEncounterClick}
        value="game"
      >
        <img
          src="/Images/AvailableLvl.png"
          alt="Available Level"
          height="100px"
        />
      </button>
    </div>
  );
};
