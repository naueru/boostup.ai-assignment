// Types
import { FC } from "react";

// Constants
import { CHART_WAVE_COLOR } from "../../../../constants/colors";

// Styles
import styles from "./wave.module.css";

export type TWaveProps = {
  height: number;
  width: number;
  nodes: number[];
};

const Wave: FC<TWaveProps> = ({ width, height, nodes }) => {
  const step = width / nodes.length;
  const displacedNodes = nodes.map((node, idx) => {
    const isEven = idx % 2 === 0;
    return node + (isEven ? 10 : -10);
  });
  return (
    <div className={styles.container}>
      <svg width={width} height={height} version="1.1" id="svg1">
        <defs id="defs1">
          <linearGradient
            id="linearGradient1"
            x2="50%"
            y2="0%"
            x1="50%"
            y1="100%"
          >
            <stop
              style={{ stopColor: CHART_WAVE_COLOR, stopOpacity: 1 }}
              offset="0"
              id="stop1"
            />
            <stop
              style={{ stopColor: CHART_WAVE_COLOR, stopOpacity: 0.35 }}
              offset="1"
              id="stop2"
            />
          </linearGradient>
        </defs>
        <g id="layer1">
          <path
            id="rect1"
            style={{
              fill: "url(#linearGradient1)",
              strokeWidth: 1,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
            }}
            d={`
              m 0 ${height}
              l 0 ${-displacedNodes[0]}
              ${displacedNodes.map((c, i, a) => {
                let right = step;
                if (i === 0) right = step / 2;

                return `l ${right} ${(a[i - 1] || c) - c}`;
              })}
              l ${step} 0
              l 0 ${displacedNodes[displacedNodes.length - 1]}
              Z`}
          />
          {displacedNodes.map((node, index) => (
            <circle
              key={`wave_node_${index}`}
              cx={step / 2 + index * step}
              cy={height - node}
              r={3}
              fill={CHART_WAVE_COLOR}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Wave;
