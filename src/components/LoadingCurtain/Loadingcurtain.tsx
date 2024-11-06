// Types
import { FC } from "react";

// Components
import Spinner from "../Spinner/Spinner";

// Styles
import styles from "./loadingCurtain.module.css";

const LoadingCurtain: FC = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
};

export default LoadingCurtain;
