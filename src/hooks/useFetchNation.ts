// Hooks
import useCustomQuery from "./useCustomQuery";

// Utils
import { parseLocation } from "../utils/parser";

const useFetchNation = (skip: boolean = false) => {
  const { data, ...rest } = useCustomQuery(
    "/data?drilldowns=Nation&measures=Total%20Population&Nativity=1,2",
    skip
  );

  return { ...rest, data: parseLocation(data?.data) };
};

export default useFetchNation;
