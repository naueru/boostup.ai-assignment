// Types
import { FC } from "react";

// Utils
import { formatValue, IParsedState } from "../../utils/parser";

// Stiles
import styles from "./table.module.css";

export interface TTableProps {
  data: IParsedState[];
  onClick?: Function;
  id?: string;
}

const Table: FC<TTableProps> = ({ data, onClick }) => {
  const handleClick = (id: string) => {
    if (onClick && id) onClick(id);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {Object.keys(data[0]).map((label, i) => (
          <div key={`data_header_label_${i}`} className={styles.label}>
            {label}
          </div>
        ))}
      </header>
      <ul className={styles.list}>
        {data.map((el, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <li
              key={`data_row_${idx}`}
              className={`${styles.row} ${isEven ? styles.dark : ""}`}
            >
              {Object.values(el).map((value, i) => (
                <div
                  key={`data_row_${idx}_cell_${i}`}
                  className={styles.cell}
                  onClick={i === 0 ? () => handleClick(`${value}`) : undefined}
                >
                  {formatValue(value)}
                </div>
              ))}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Table;
