// Types
import { FC } from "react";

// Styles
import styles from "./item.module.css";

export type TItemData = {
  label: string;
  value: string;
  disabled: boolean;
};

export type TItemProps = {
  onClick: Function;
} & TItemData;

const Item: FC<TItemProps> = ({ label, value, onClick, disabled }) => {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <li
      className={`${styles.container} ${disabled ? styles.disabled : ""}`}
      onMouseDown={handleClick}
    >
      {label}
    </li>
  );
};

export default Item;
