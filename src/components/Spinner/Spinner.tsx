// Types
import { FC } from "react";

// Styles
import styles from "./spinner.module.css";

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
