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

    const total = current["Total Population"];
    const isForeing = current.Nativity === "Foreign born";
    if (currentIndex > -1) {
      acc[currentIndex] = {
        ...acc[currentIndex],
        data: {
          total: acc[currentIndex].data.total + total,
          foreign: isForeing ? total : 0,
        },
      };
    } else {
      acc.push({
        label: current.Year,
        data: {
          foreign: isForeing ? total : 0,
          total,
        },
      });
    }

    return acc;
  }, []);
  return result;
};
