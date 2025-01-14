// Core
import { FC } from "react";

// Components
import Bars from "../Bar/Bar";

// Utils
import { IParsedElement } from "../../../../utils/parser";
import { stringToColor } from "../../../../utils/colors";

// Styles
import styles from "./barsGraphic.module.css";

export type TBarsGraphicProps = {
  data: IParsedElement[];
  onClick: (id: number | string) => void;
  max: number;
};

const BarsGraphic: FC<TBarsGraphicProps> = ({ onClick, data, max }) => {
  const reversed = [...data].reverse();

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        {reversed &&
          reversed.map((year, index) => {
            const yearData = Object.entries(year.data);
            const lbl = year.label;
            return (
              <>
                <Bars
                  onClick={onClick}
                  key={`bars-${lbl}-${index}`}
                  id={lbl}
                  max={max}
                  values={yearData.map((e) => ({
                    label: `${e[1]}`,
                    value: e[1],
                    color: stringToColor(`${e[0]}`),
                  }))}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default BarsGraphic;
