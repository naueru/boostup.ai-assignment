// Types
import { FC } from "react";

// Styles
import styles from "./branding.module.css";
import { Link } from "react-router-dom";

export type TBrandingProps = {
  size?: "s" | "m" | "l" | "S" | "M" | "L";
};

const Branding: FC<TBrandingProps> = ({ size = "m" }) => {
  const dimension =
    size.toLowerCase() === "s" ? 30 : size.toLowerCase() === "m" ? 50 : 80;
  return (
    <Link to="/">
      <div className={styles.container}>
        <div
          className={styles.img}
          style={{ width: `${dimension * 3}px`, height: `${dimension}px` }}
        />
      </div>
    </Link>
  );
};

export default Branding;
