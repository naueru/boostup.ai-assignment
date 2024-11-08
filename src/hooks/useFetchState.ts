// Hooks
import useCustomQuery from "./useCustomQuery";

// Utils
import { parseLocation } from "../utils/parser";

const useFetchState = (stateId: string = "", skip: boolean = false) => {
  const { data, ...rest } = useCustomQuery(
    `/data?&measure=Total%20Population&Nativity=1,2&Geography=${stateId}`,
    skip
  );

  return { ...rest, data: parseLocation(data?.data) };
};

export default useFetchState;
