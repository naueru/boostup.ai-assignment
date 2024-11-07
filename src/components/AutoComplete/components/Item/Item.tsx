// Types
import { FC } from "react";

// Styles
import styles from "./item.module.css";

export type TItemData = {
  label: string;
  value: string;
};

export type TItemProps = {
  onClick: Function;
} & TItemData;

const Item: FC<TItemProps> = ({ label, value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <li className={styles.container} onMouseDown={handleClick}>
      {label}
    </li>
  );
};

export default Item;
