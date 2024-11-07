// Core
import { FC, useMemo } from "react";

// Components
import Bar from "./components/Bar/Bar";
import Labels from "./components/Labels/Labels";
import Legend from "./components/Legend/Legend";

// Utils
import { IParsedElement } from "../../utils/parser";

// Styles
import styles from "./chart.module.css";

export type TChart = {
  data: IParsedElement[];
  onClick: (id: number | string) => void;
};

const Chart: FC<TChart> = ({ onClick, data }) => {
  const reversed = [...data].reverse();
  const ids = reversed.map((el) => el.label);
  const legendLabels = (data[0]?.data && Object.keys(data[0]?.data)) || [];

  const max = useMemo(
    () =>
      Math.max(
        ...reversed.reduce<number[]>((acc, current) => {
          const values = Object.values(current.data);
          return [...acc, ...values];
        }, [])
      ),
    [reversed]
  );

  return (
    <div className={styles.container}>
      <Legend labels={legendLabels} />

      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          {reversed &&
            reversed.map((el, index) => (
              <Bar
                onClick={onClick}
                key={`bar-${el.label}-${index}`}
                id={el.label}
                max={max}
                data={Object.entries(el.data)}
              />
            ))}
        </div>

        <Labels data={ids} />
      </div>
    </div>
  );
};

export default Chart;
