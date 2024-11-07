// Hooks
import { useQuery } from "@tanstack/react-query";

// Constants
import { API } from "../constants/constants";

const useCustomQuery = (path: string, skip: boolean = false) => {
  const url = API + path;

  return useQuery({
    queryKey: [path],
    queryFn: () => fetch(url).then((res) => res.json()),
    enabled: !skip,
  });
};

export default useCustomQuery;
