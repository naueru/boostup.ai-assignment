// Types
import { FC } from "react";

// Styles
import styles from "./link.module.css";

export type TLink = {
  label: string;
  href: string;
  type?: "link" | "button";
};

const Link: FC<TLink> = ({ label, href, type = "link" }) => {
  const classNames = `${styles.container} ${styles[type]}`;

  return (
    <a className={classNames} href={href} target="_self">
      {label}
    </a>
  );
};

export default Link;
