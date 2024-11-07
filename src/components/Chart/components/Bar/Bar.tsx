// Types
import { FC } from "react";

// Utils
import { stringToColor } from "../../../../utils/colors";

// Styles
import styles from "./bar.module.css";

export type TBar = {
  id: number | string;
  native?: number;
  foreignborn?: number;
  max: number;
  data: Array<Array<string | number>>;
  onClick: (year: number | string) => void;
};

const Bar: FC<TBar> = ({ id, data, max, onClick }) => {
  return (
    <div className={styles.barsContainer} onClick={() => onClick(id)}>
      {data.map((current, idx) => {
        const percent = (+current[1] / max) * 100;
        return (
          <div
            key={`chart_bar_${current[0]}_${idx}`}
            className={styles.bar}
            style={{
              height: `${percent}%`,
              backgroundColor: stringToColor(`${current[0]}`),
            }}
          />
        );
      })}
    </div>
  );
};

export default Bar;
