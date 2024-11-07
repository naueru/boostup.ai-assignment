// Types
import { FC } from "react";

// Components
import Label from "../Label/Label";
import Header from "../Header/Header";

// Styles
import styles from "./filters.module.css";

export type TFiltersProps = {
  years: number[];
  defaultValues: { [key: string]: number | string | undefined };
  onChange: (name: string, value: string) => void;
};

const Filters: FC<TFiltersProps> = ({ years, onChange, defaultValues }) => {
  const handleChange = (name: string, value: string) => {
    onChange(name, value);
  };

  return (
    <aside className={styles.container}>
      <Header label="Select year range" />
      <section className={styles.yearRangeFilter}>
        <Label label="From" />
        <select
          onChange={(e) => handleChange("fromYear", e.target.value)}
          value={defaultValues.fromYear}
        >
          {years.map((year) => (
            <option
              value={year}
              key={`fromYear_option_${year}`}
              disabled={year > +(defaultValues.toYear || 0)}
            >
              {year}
            </option>
          ))}
        </select>
        <Label label="To" />
        <select
          onChange={(e) => handleChange("toYear", e.target.value)}
          value={defaultValues.toYear}
        >
          {years.map((year) => (
            <option
              value={year}
              key={`toYear_option_${year}`}
              disabled={year < +(defaultValues.fromYear || 0)}
            >
              {year}
            </option>
          ))}
        </select>
      </section>
    </aside>
  );
};

export default Filters;
