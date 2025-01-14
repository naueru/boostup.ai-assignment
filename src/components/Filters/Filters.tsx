// Types
import { FC } from "react";

// Components
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Label from "../Label/Label";

// Styles
import styles from "./filters.module.css";

export type TFiltersProps = {
  years: number[];
  defaultValues: { [key: string]: number | string | undefined };
  onChange: (name: string, value: string) => void;
  onGraphSelect: (value: number) => {};
  selectedGraphic: number;
};

const graphicStyles = [styles.hybrid, styles.bars];

const Filters: FC<TFiltersProps> = ({
  years,
  onChange,
  defaultValues,
  onGraphSelect,
  selectedGraphic,
}) => {
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
        <div>
          <Label label="Select graphic type" />
          <div>
            {graphicStyles.map((graphic, index) => (
              <Button
                onClick={() => onGraphSelect(index)}
                type="secondary"
                key={graphic}
              >
                <div className={styles.iconContainer}>
                  <div
                    className={`${styles.icon} ${graphic} ${
                      selectedGraphic === index ? styles.selected : ""
                    }`}
                  />
                  <span
                    className={`${styles.selectedIndicator} ${
                      selectedGraphic === index ? styles.selected : ""
                    }`}
                  />
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Filters;
