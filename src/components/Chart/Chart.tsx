// Core
import { FC, useMemo } from "react";

// Components
import HybridGraphic from "./components/HybridGraphic/HybridGraphic";
import BarsGraphic from "./components/BarsGraphic/BarsGraphic";
import Labels from "./components/Labels/Labels";
import Legend from "./components/Legend/Legend";
import Title from "../Title/Title";

// Utils
import { getNextRoundNumber } from "../../utils/math";
import { IParsedElement } from "../../utils/parser";

// Styles
import styles from "./chart.module.css";

export type TChart = {
  data: IParsedElement[];
  onClick: (id: number | string) => void;
  label: string;
  graph: number;
};

const Chart: FC<TChart> = ({ onClick, data, label, graph }) => {
  const reversed = [...data].reverse();
  const ids = reversed.map((el) => el.label);
  const legendLabels = (data[0]?.data && Object.keys(data[0]?.data)) || [];

  const max = useMemo(
    () =>
      getNextRoundNumber(
        Math.max(
          ...reversed.reduce<number[]>((acc, current) => {
            const values = Object.values(current.data);
            return [...acc, ...values];
          }, [])
        )
      ),
    [reversed]
  );

  return (
    <div className={styles.container}>
      <Title label={label} />
      <div className={styles.grid}>
        <div className={styles.range}>
          <label>{max}</label>
          <label>0</label>
        </div>

        {graph ? (
          <BarsGraphic data={data} onClick={onClick} max={max} />
        ) : (
          <HybridGraphic data={data} onClick={onClick} max={max} />
        )}
        <div className={styles.labels}>
          <Labels data={ids} />
        </div>
        <div className={styles.legends}>
          <Legend labels={legendLabels} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
