// Hooks
import { useNavigate, useParams } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";

// Types
import { FC } from "react";

// Components
import useFetchStates from "../../hooks/useFetchStates";
import AutoComplete from "../AutoComplete/AutoComplete";
import Branding from "../Branding/Branding";
import Banner from "../Banner/Banner";
import Link from "../Link/Link";

// Styles
import styles from "./header.module.css";

const Header: FC = () => {
  const { stateId } = useParams();
  const { isLoading: isStatesPending, data: statesList } = useFetchStates();
  const isDesktop = useIsDesktop();

  const navigate = useNavigate();
  const handleStateSelect = (id: string) => {
    navigate(`/${id}`);
  };

  const handleStateRemove = () => {
    navigate("/");
  };
  const selectedState =
    statesList.find((state) => state.value === stateId)?.label || "";
  return (
    <header className={styles.container}>
      <Banner label="The graphic values may be altered for demostration purposes" />
      <nav className={styles.content}>
        <Branding size={isDesktop ? "m" : "s"} />

        <div className={styles.navItem}>
          <AutoComplete
            placeholder="Search state..."
            data={statesList}
            value={selectedState}
            onSelect={handleStateSelect}
            onClear={handleStateRemove}
            loading={isStatesPending}
          />
        </div>

        <Link
          label={isDesktop ? "Source" : ""}
          href="https://github.com/naueru/boostup.ai-assignment"
          type="button"
        >
          <div className={styles.icon} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
