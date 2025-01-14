// Core
import { FC, useState } from "react";

// Types
import { IParsedElement } from "../../utils/parser";

// Components
import Chart from "../Chart/Chart";
import Filters from "../Filters/Filters";

// Styles
import styles from "./histogram.module.css";

export type THistogramProps = {
  years: number[];
  defaultValues: { [key: string]: number | string | undefined };
  onChange: (name: string, value: string) => void;
  data: IParsedElement[];
  onClick: (id: number | string) => void;
  label: string;
};

const Histogram: FC<THistogramProps> = ({
  years,
  onChange,
  defaultValues,
  data,
  onClick,
  label,
}) => {
  const [graph, setGraph] = useState(0);

  const handleGraphChange = (value: number) => {
    setGraph(value);
    return {};
  };

  return (
    <div className={styles.chartContainer}>
      <Filters
        years={years}
        onChange={onChange}
        defaultValues={defaultValues}
        onGraphSelect={handleGraphChange}
        selectedGraphic={graph}
      />
      <Chart data={data} onClick={onClick} label={label} graph={graph} />
    </div>
  );
};

export default Histogram;
