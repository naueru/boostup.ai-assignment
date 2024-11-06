// Hooks
import { useQuery } from "@tanstack/react-query";

// Constants
import { API } from "../constants/constants";

const useCustomQuery = (path: string) => {
  const url = API + path;

  return useQuery({
    queryKey: [path],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
};

export default useCustomQuery;
