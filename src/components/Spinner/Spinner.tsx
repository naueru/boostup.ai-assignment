// Types
import { FC } from "react";

// Styles
import styles from "./spinner.module.css";

export type TSpinner = {
  size?: "s" | "S" | "m" | "M" | "l" | "L";
};

const Spinner: FC<TSpinner> = ({ size }) => {
  let scale: number;

  switch (size) {
    case "s":
    case "S":
      scale = 0.4;
      break;
    case "l":
    case "L":
      scale = 1.5;
      break;
    default:
      scale = 1;
      break;
  }

  return (
    <div className={styles.spinner} style={{ transform: `scale(${scale})` }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
