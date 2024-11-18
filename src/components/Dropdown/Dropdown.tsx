// Types
import { FC, useEffect, useState } from "react";

// Component
import Item, { TItemData } from "./components/Item/Item";
import Label from "../Label/Label";

// Styles
import styles from "./dropdown.module.css";

export type TDropdownProps = {
  value?: string;
  name?: string;
  data: TItemData[];
  onSelect: Function;
};

const Dropdown: FC<TDropdownProps> = ({ value = "", data, onSelect, name }) => {
  const [val, setVal] = useState(value);
  const [visible, setVisible] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div
      className={styles.container}
      onClick={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className={styles.content}>
        <Label label={val} />
        <div className={`${styles.icon} ${visible ? styles.open : ""}`} />
      </div>
      {visible ? (
        <div className={styles.optionsContainer}>
          <div className={styles.optionsWrapper}>
            <ul className={styles.optionsList}>
              {data.map((item: TItemData, index) => (
                <Item
                  key={`dropdown_${name}_item_${index}`}
                  onClick={handleSelect}
                  {...item}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
