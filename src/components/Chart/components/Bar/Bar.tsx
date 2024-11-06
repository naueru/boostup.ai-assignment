// Types
import { FC } from "react";

// Styles
import styles from "./bar.module.css";

export type TBar = {
  id: number | string;
  native?: number;
  foreignborn?: number;
  max: number;
  data: number[];
  onClick: (year: number | string) => void;
};

const Bar: FC<TBar> = ({ id, data, max, onClick }) => {
  return (
    <div className={styles.barsContainer} onClick={() => onClick(id)}>
      {data.map((current) => {
        const percent = (current / max) * 100;
        return <div className={styles.bar} style={{ height: `${percent}%` }} />;
      })}
    </div>
  );
};

export default Bar;
