// Types
import { FC } from "react";

// Styles
import styles from "./banner.module.css";

export type THeaderProps = {
  label?: string;
};

const Banner: FC<THeaderProps> = ({ label }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.label}>{label}</h5>
    </div>
  );
};

export default Banner;
