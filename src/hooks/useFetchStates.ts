// Hooks
import useCustomQuery from "./useCustomQuery";

// Utils
import { parseStatesList } from "../utils/parser";

const useFetchStates = (skip: boolean = false) => {
  const { data, ...rest } = useCustomQuery(
    `/searchLegacy/?limit=100&dimension=Geography&hierarchy=State`,
    skip
  );

  return { ...rest, data: parseStatesList(data?.results) };
};

export default useFetchStates;
