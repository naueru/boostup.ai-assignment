// Types
import { FC } from "react";

// Styles
import styles from "./labels.module.css";

export type TLabels = {
  data: string[] | number[];
};

const Labels: FC<TLabels> = ({ data }) => (
  <ul className={styles.labelsList}>
    {data.map((label, index) => (
      <li className={styles.label} key={`label-${label}-${index}`}>
        {label}
      </li>
    ))}
  </ul>
);

export default Labels;
