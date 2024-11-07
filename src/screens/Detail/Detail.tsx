// Hooks
import { useParams } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery";

// Components
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Table from "../../components/Table/Table";

// Utils
import { parseYear } from "../../utils/parser";

// Styles
import styles from "./detail.module.css";

const Detail = () => {
  const { year } = useParams();

  const { isPending, data } = useCustomQuery(
    `/data?drilldowns=State&measures=Total%20Population&Nativity=1,2&year=${year}`
  );

  const parsedData = parseYear(data?.data);

  if (isPending) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Header label={`Demographic data for year ${year}`} />
      <Link href="/" label="Home" type="button" />
      <div className={styles.tableWrapper}>
        <Table data={parsedData} />
      </div>
    </main>
  );
};

export default Detail;
