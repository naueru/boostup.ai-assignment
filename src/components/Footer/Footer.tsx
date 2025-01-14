// Types
import { FC } from "react";

// Components
import Link from "../Link/Link";

// Styles
import styles from "./footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.waves}>
        <div className={styles.content}>
          <p className={styles.description}>
            A technical assignment for {"BoostUp.AI"}
          </p>
          <Link
            label="Source"
            href="https://github.com/naueru/boostup.ai-assignment"
          >
            <div className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
