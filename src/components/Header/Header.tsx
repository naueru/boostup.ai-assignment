// Types
import { FC } from "react";

// Styles
import styles from "./header.module.css";

export type THeaderProps = {
  label: string;
};

const Header: FC<THeaderProps> = ({ label }) => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>{label}</h2>
    </header>
  );
};

export default Header;
