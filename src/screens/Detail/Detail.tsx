// Hooks
import { useNavigate, useParams } from "react-router-dom";
import useFetchYear from "../../hooks/useFetchYear";
import useFetchStates from "../../hooks/useFetchStates";

// Components
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Table from "../../components/Table/Table";

// Styles
import styles from "./detail.module.css";

const Detail = () => {
  const { year } = useParams();
  const navigate = useNavigate();

  const { isPending, data } = useFetchYear(year);

  const { isLoading: isStatesPending, data: statesList } = useFetchStates();

  const handleClick = (name: string) => {
    navigate(`/${statesList.find((state) => state.label === name)?.value}`);
  };

  if (isPending || isStatesPending) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Header label={`Demographic data for year ${year}`} />
      <Link href="/" label="Home" type="button" />
      <div className={styles.tableWrapper}>
        <Table data={data} onClick={handleClick} />
      </div>
    </main>
  );
};

export default Detail;
