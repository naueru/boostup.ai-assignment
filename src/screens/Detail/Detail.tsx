// Hooks
import { useNavigate, useParams } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery";

// Components
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Table from "../../components/Table/Table";

// Utils
import { parseStatesList, parseYear } from "../../utils/parser";

// Styles
import styles from "./detail.module.css";

const Detail = () => {
  const { year } = useParams();
  const navigate = useNavigate();

  const { isPending, data } = useCustomQuery(
    `/data?drilldowns=State&measures=Total%20Population&Nativity=1,2&year=${year}`
  );

  const { isLoading: isStatesPending, data: statesData } = useCustomQuery(
    `/searchLegacy/?limit=100&dimension=Geography&hierarchy=State`
  );

  const parsedStatesData = parseStatesList(statesData?.results);

  const handleClick = (name: string) => {
    navigate(
      `/${parsedStatesData.find((state) => state.label === name)?.value}`
    );
  };

  const parsedData = parseYear(data?.data);

  if (isPending || isStatesPending) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Header label={`Demographic data for year ${year}`} />
      <Link href="/" label="Home" type="button" />
      <div className={styles.tableWrapper}>
        <Table data={parsedData} onClick={handleClick} />
      </div>
    </main>
  );
};

export default Detail;
