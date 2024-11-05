// Types
import { FC } from "react";

// Styles
import styles from "./Button.module.css";

export type TButton = {
  label: string;
  onClick: () => {};
  type?: "primary" | "secondary";
};

const Button: FC<TButton> = ({ label, onClick, type = "primary" }) => {
  const classNames = `${styles.container} ${styles[type]}`;

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
