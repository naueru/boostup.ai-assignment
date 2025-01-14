// Core
import { FC, useLayoutEffect, useRef, useState } from "react";

// Components
import Wave from "../Wave/Wave";
import Bars from "../Bar/Bar";

// Utils
import { IParsedElement } from "../../../../utils/parser";

// Styles
import styles from "./hybridGraphic.module.css";

export type THybridGraphic = {
  data: IParsedElement[];
  onClick: (id: number | string) => void;
  max: number;
};

const HybridGraphic: FC<THybridGraphic> = ({ onClick, data, max }) => {
  const contRef = useRef(null);
  const reversed = [...data].reverse();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (contRef.current) {
      const { clientWidth, clientHeight } = contRef.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  return (
    <div className={styles.chartContainer} ref={contRef}>
      <div className={styles.chart}>
        {reversed &&
          reversed.map((el, index) => {
            const list = Object.entries(el.data);
            return (
              <Bars
                onClick={onClick}
                key={`bar-${el.label}-${index}`}
                id={el.label}
                max={max}
                values={[
                  {
                    value: list[0][1],
                    label: `${list[0][0]}: ${list[0][1]} / ${list[1][0]}: ${list[1][1]}`,
                  },
                ]}
              />
            );
          })}
      </div>
      <Wave
        width={dimensions.width}
        height={dimensions.height}
        nodes={
          reversed &&
          reversed.map((el) => (el.data.foreign / max) * dimensions.height)
        }
      />
    </div>
  );
};

export default HybridGraphic;
