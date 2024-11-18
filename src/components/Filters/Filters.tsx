// Types
import { FC } from "react";

// Components
import Label from "../Label/Label";
import Title from "../Title/Title";
import Dropdown from "../Dropdown/Dropdown";

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
      <Title label="Select year range" />
      <section className={styles.yearRangeFilter}>
        <Label label="From" />
        <Dropdown
          value={`${defaultValues.fromYear}`}
          data={years.map((year) => ({
            label: `${year}`,
            value: `${year}`,
            disabled: year > +(defaultValues.toYear || 0),
          }))}
          onSelect={(value: string) => handleChange("fromYear", value)}
          name="fromYear"
        />
        <Label label="To" />
        <Dropdown
          value={`${defaultValues.toYear}`}
          data={years.map((year) => ({
            label: `${year}`,
            value: `${year}`,
            disabled: year < +(defaultValues.fromYear || 0),
          }))}
          onSelect={(value: string) => handleChange("toYear", value)}
          name="toYear"
        />
      </section>
    </aside>
  );
};

export default Filters;
