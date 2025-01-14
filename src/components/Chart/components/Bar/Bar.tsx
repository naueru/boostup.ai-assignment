// Types
import { FC } from "react";

// Styles
import styles from "./bar.module.css";

export interface IBarData {
  value: number;
  color?: string;
  label?: string;
}

export type TBars = {
  id: number | string;
  native?: number;
  foreignborn?: number;
  max: number;
  onClick: (year: number | string) => void;
  values: IBarData[];
};

const Bars: FC<TBars> = ({ id, max, onClick, values }) => {
  return (
    <div className={styles.barsContainer} onClick={() => onClick(id)}>
      {values.map((val, index) => {
        const { value, label, color } = val;
        const percent = (+value / max) * 100;
        const lbl = `${label || value}`;
        return (
          <div
            key={`bar-${lbl}-${index}`}
            title={lbl}
            className={styles.bar}
            style={{
              height: `${percent}%`,
              backgroundColor: color,
              ...(color
                ? {
                    backgroundImage: "none",
                  }
                : {}),
            }}
          />
        );
      })}
    </div>
  );
};

export default Bars;
