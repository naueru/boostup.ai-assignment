// Types
import { FC, PropsWithChildren } from "react";

// Styles
import styles from "./button.module.css";

export type TButton = {
  label?: string;
  onClick: () => {};
  type?: "primary" | "secondary";
} & PropsWithChildren;

const Button: FC<TButton> = ({
  label,
  onClick,
  type = "primary",
  children,
}) => {
  const classNames = `${styles.container} ${styles[type]}`;

  return (
    <button className={classNames} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
