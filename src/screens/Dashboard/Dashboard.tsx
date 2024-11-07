// Types
import { FC, useEffect, useState } from "react";

// Hooks
import { useNavigate, useParams } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery";

// Components
import LoadingCurtain from "../../components/LoadingCurtain/Loadingcurtain";
import Histogram from "../../components/Histogram/Histogram";
import Header from "../../components/Header/Header";

// Utils
import { parseLocation, parseStatesList } from "../../utils/parser";

// Styles
import styles from "./dashboard.module.css";
import AutoComplete from "../../components/AutoComplete/AutoComplete";

const Dashboard: FC = () => {
  const { stateId } = useParams();
  const { isLoading: isPending, data } = useCustomQuery(
    "/data?drilldowns=Nation&measures=Total%20Population&Nativity=1,2",
    !!stateId
  );
  const { isLoading: isStatePending, data: stateData } = useCustomQuery(
    `/data?&measure=Total%20Population&Nativity=1,2&Geography=${stateId}`,
    !stateId
  );
  const { isLoading: isStatesPending, data: statesData } = useCustomQuery(
    `/searchLegacy/?limit=100&dimension=Geography&hierarchy=State`
  );

  const navigate = useNavigate();

  const [fromYear, setFromYear] = useState<number>();

  const [toYear, setToYear] = useState<number>();

  const stateHandlers: { [key: string]: Function } = { setFromYear, setToYear };

  const parsedNationData = parseLocation(data?.data);
  const parsedStateData = parseLocation(stateData?.data);
  const parsedStatesData = parseStatesList(statesData?.results);

  const parsedData =
    !!stateId && !!parsedStateData ? parsedStateData : parsedNationData;

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

  const isLoading = isPending || isStatePending || isStatesPending;

  const handleStateSelect = (id: string) => {
    navigate(`/${id}`);
  };

  const handleStateRemove = () => {
    navigate("/");
  };

  const selectedState =
    parsedStatesData.find((state) => state.value === stateId)?.label || "";

  if (isLoading) return <LoadingCurtain />;

  return (
    <main className={styles.container}>
      <Header label={`${selectedState || "US"} Demographic data`} />
      <AutoComplete
        placeholder="Search state..."
        data={parsedStatesData}
        value={selectedState}
        onSelect={handleStateSelect}
        onClear={handleStateRemove}
      />
      <Histogram
        years={years}
        onChange={handleYearChange}
        defaultValues={{ fromYear, toYear }}
        data={filteredData}
        onClick={(id: string | number) => {
          navigate(`/year/${id}`);
        }}
      />
    </main>
  );
};

export default Dashboard;
