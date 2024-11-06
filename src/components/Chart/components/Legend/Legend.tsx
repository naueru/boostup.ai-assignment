// Styles
import styles from "./legend.module.css";

const Legend = () => (
  <ul className={styles.legendList}>
    <li className={styles.legendListItem}>
      <div className={styles.identifier} /> <label>Total</label>
    </li>
    <li className={styles.legendListItem}>
      <div className={styles.identifier} /> <label>Foreign</label>
    </li>
  </ul>
);

export default Legend;
