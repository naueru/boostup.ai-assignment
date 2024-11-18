// Types
import { FC } from "react";

// Styles
import styles from "./title.module.css";

export type TTitleProps = {
  label: string;
};

const Title: FC<TTitleProps> = ({ label }) => {
  return <h3 className={styles.title}>{label}</h3>;
};

export default Title;
