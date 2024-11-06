// Types
import { FC } from "react";

// Hooks
import useCustomQuery from "../../hooks/useCustomQuery";

// Components
import Chart from "../../components/Chart/Chart";
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";

// Utils
import { parseNation } from "../../utils/parser";

// Styles
import styles from "./dashboard.module.css";

const Dashboard: FC = () => {
  const { isPending, data } = useCustomQuery(
    "/data?drilldowns=Nation&measures=Total%20Population&Nativity=1,2"
  );

  const parsedData = parseNation(data?.data);

  if (isPending) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Chart
        data={parsedData}
        onClick={(id: string | number) => {
          console.log(id);
        }}
      />
    </main>
  );
};

export default Dashboard;
