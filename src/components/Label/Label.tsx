// Types
import { FC } from "react";

// Styles
import styles from "./label.module.css";

export type TLabelProps = {
  label: string;
  alt?: boolean;
};

const Label: FC<TLabelProps> = ({ label, alt }) => {
  return (
    <label className={`${styles.label} ${alt ? styles.alt : ""}`}>
      {label}
    </label>
  );
};

export default Label;
