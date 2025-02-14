import useMediaQuery from "./useMediaQuery";

function useIsDesktop() {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });

  return isDesktop;
}

export default useIsDesktop;
