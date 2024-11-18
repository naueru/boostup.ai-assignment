// Types
import { FC, PropsWithChildren } from "react";

// Styles
import styles from "./link.module.css";

export type TLink = {
  label?: string;
  href: string;
  type?: "link" | "button";
} & PropsWithChildren;

const Link: FC<TLink> = ({ label, href, type = "link", children }) => {
  const classNames = `${styles.container} ${styles[type]}`;

  return (
    <a className={classNames} href={href} target="_self">
      {label ? label : null}
      {children}
    </a>
  );
};

export default Link;
