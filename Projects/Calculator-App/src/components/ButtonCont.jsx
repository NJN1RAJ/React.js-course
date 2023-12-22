import styles from "./Button.module.css";

function ButtonCont({ onBtnClick }) {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttcont}>
      {ButtonNames.map((item) => {
        return (
          <button
            className={styles.butt}
            key={item}
            onClick={() => onBtnClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonCont;
