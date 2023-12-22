import { useState } from "react";
import styles from "./App.module.css";
import ButtonCont from "./components/ButtonCont";
import Display from "./components/Display";

function App() {
  let [calVal, setCalVal] = useState("");
  let onBtnClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.container}>
      <Display displayVal={calVal}></Display>
      <ButtonCont onBtnClick={onBtnClick}></ButtonCont>
    </div>
  );
}

export default App;
