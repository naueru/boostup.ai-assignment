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
    size.toLowerCase() === "s"
      ? "30px"
      : size.toLowerCase() === "m"
      ? "50px"
      : "80px";
  return (
    <Link to="/">
      <div className={styles.container}>
        <img
          src="logo.svg"
          alt="uS Demographic Logo"
          height={dimension}
          width={dimension}
        />
      </div>
    </Link>
  );
};

export default Branding;
