// Types
import { FC } from "react";

// Components
import Branding from "../Branding/Branding";

// Styles
import styles from "./header.module.css";

export type THeaderProps = {
  label: string;
};

const Header: FC<THeaderProps> = ({ label }) => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Branding size="m" />
        <h2 className={styles.title}>{label}</h2>
      </div>
    </header>
  );
};

export default Header;
