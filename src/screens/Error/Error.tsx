// Types
import { FC } from "react";

// Components
import Link from "../../components/Link/Link";

// Styles
import styles from "./error.module.css";

const Error: FC = () => {
  return (
    <main className={styles.container}>
      <p className={styles.description}>
        The page you're looking for does not exist.
      </p>
      <Link label="Go back home" href="/" />
    </main>
  );
};

export default Error;
