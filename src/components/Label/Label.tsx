// Types
import { FC } from "react";

// Styles
import styles from "./label.module.css";

export type TLabelProps = {
  label: string;
};

const Label: FC<TLabelProps> = ({ label }) => {
  return <label className={styles.label}>{label}</label>;
};

export default Label;
