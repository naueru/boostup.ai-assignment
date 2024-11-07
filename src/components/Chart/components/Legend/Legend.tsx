// Types
import { FC } from "react";

// Utils
import { stringToColor } from "../../../../utils/colors";

// Styles
import styles from "./legend.module.css";

export type TLegendProps = {
  labels: string[];
};

const Legend: FC<TLegendProps> = ({ labels }) => (
  <ul className={styles.legendList}>
    {labels.map((label, idx) => (
      <li className={styles.legendListItem} key={`legend_${label}_${idx}`}>
        <div
          className={styles.identifier}
          style={{ backgroundColor: stringToColor(label) }}
        />
        <label className={styles.label}>{label}</label>
      </li>
    ))}
  </ul>
);

export default Legend;
