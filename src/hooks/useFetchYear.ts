// Hooks
import useCustomQuery from "./useCustomQuery";

// Utils
import { parseYear } from "../utils/parser";

const useFetchYear = (year: number | string = "", skip: boolean = false) => {
  const { data, ...rest } = useCustomQuery(
    `/data?drilldowns=State&measures=Total%20Population&Nativity=1,2&year=${year}`,
    skip
  );
  return { ...rest, data: parseYear(data?.data) };
};

export default useFetchYear;
