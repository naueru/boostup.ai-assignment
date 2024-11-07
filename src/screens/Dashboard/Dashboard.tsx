// Types
import { FC, useEffect, useState } from "react";

// Hooks
import { useNavigate } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery";

// Components
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Histogram from "../../components/Histogram/Histogram";
import Header from "../../components/Header/Header";

// Utils
import { parseLocation } from "../../utils/parser";

// Styles
import styles from "./dashboard.module.css";

const Dashboard: FC = () => {
  const { isPending, data } = useCustomQuery(
    "/data?drilldowns=Nation&measures=Total%20Population&Nativity=1,2"
  );

  const navigate = useNavigate();

  const [fromYear, setFromYear] = useState<number>();

  const [toYear, setToYear] = useState<number>();

  const stateHandlers: { [key: string]: Function } = { setFromYear, setToYear };

  const parsedData = parseLocation(data?.data);
  const years = [...parsedData].reverse().map((year) => year.label);

  const filteredData = parsedData.filter((c) =>
    fromYear && toYear ? c.label >= fromYear && c.label <= toYear : true
  );

  const handleYearChange = (name: string, value: string) => {
    const setter = "set" + name.charAt(0).toUpperCase() + name.slice(1);

    if (Object.keys(stateHandlers).indexOf(setter) > -1)
      stateHandlers[setter](+value);
  };

  useEffect(() => {
    if (years.length && fromYear === undefined && toYear === undefined) {
      setFromYear(years[0]);
      setToYear(years[years.length - 1]);
    }
  }, [years, fromYear, toYear]);

  if (isPending) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Header label="US Demographic data" />
      <Histogram
        years={years}
        onChange={handleYearChange}
        defaultValues={{ fromYear, toYear }}
        data={filteredData}
        onClick={(id: string | number) => {
          navigate(`year/${id}`);
        }}
      />
    </main>
  );
};

export default Dashboard;
