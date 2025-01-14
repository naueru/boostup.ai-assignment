// Types
import { FC, useEffect, useState } from "react";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import useFetchNation from "../../hooks/useFetchNation";
import useFetchStates from "../../hooks/useFetchStates";
import useFetchState from "../../hooks/useFetchState";

// Components
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Histogram from "../../components/Histogram/Histogram";

// Styles
import styles from "./dashboard.module.css";

const Dashboard: FC = () => {
  const { stateId } = useParams();
  const { isLoading: isPending, data: nationData } = useFetchNation(!!stateId);
  const { isLoading: isStatePending, data: stateData } = useFetchState(
    stateId,
    !stateId
  );
  const { isLoading: isStatesPending, data: statesList } = useFetchStates();

  const navigate = useNavigate();

  const [fromYear, setFromYear] = useState<number>();
  const [toYear, setToYear] = useState<number>();

  const stateHandlers: { [key: string]: Function } = { setFromYear, setToYear };

  const data = !!stateId && !!stateData ? stateData : nationData;

  const years = [...data].reverse().map((year) => year.label);

  const filteredData = data.filter((c) =>
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

  const isLoading = isPending || isStatePending || isStatesPending;

  const selectedState =
    statesList.find((state) => state.value === stateId)?.label || "";

  if (isLoading) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <section className={styles.histogram}>
        <Histogram
          label={`${selectedState || "US"} Demographic data`}
          years={years}
          onChange={handleYearChange}
          defaultValues={{ fromYear, toYear }}
          data={filteredData}
          onClick={(id: string | number) => {
            !selectedState && navigate(`/year/${id}`);
          }}
        />
      </section>
    </main>
  );
};

export default Dashboard;
