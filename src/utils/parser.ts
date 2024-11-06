import { INationYear, TParsedNativity } from "../types/data";

export type IParsedElement = {
  label: number;
  data: { [key in TParsedNativity]: number };
};

export const parseNation = (data: INationYear[] = []): IParsedElement[] => {
  const result = data.reduce((acc: IParsedElement[], current: INationYear) => {
    const currentIndex = acc.findIndex(
      (c: IParsedElement) => c.label === current.Year
    );
    if (currentIndex > -1) {
      acc[currentIndex] = {
        ...acc[currentIndex],
        data: {
          ...acc[currentIndex].data,
          [current.Nativity.replaceAll(" ", "").toLowerCase()]:
            current["Total Population"],
        },
      };
    } else {
      acc.push({
        label: current.Year,
        data: {
          native: 0,
          foreignborn: 0,
          [current.Nativity.replaceAll(" ", "").toLowerCase()]:
            current["Total Population"],
        },
      });
    }

    return acc;
  }, []);
  return result;
};
