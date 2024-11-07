import { INationYear, IYearState, TParsedNativity } from "../types/data";

export type IParsedElement = {
  label: number;
  data: { [key in TParsedNativity]: number };
};
export type IParsedState = {
  state: string;
  total: number;
  foreign: number;
  percent: number;
};

export const parseLocation = (data: INationYear[] = []): IParsedElement[] => {
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

export const parseYear = (data: IYearState[] = []): IParsedState[] => {
  const result = data.reduce((acc: IParsedState[], current: IYearState) => {
    const currentIndex = acc.findIndex(
      (c: IParsedState) => c.state === current.State
    );

    const total = current["Total Population"];
    const isForeing = current.Nativity === "Foreign born";
    if (currentIndex > -1) {
      const newTotal = acc[currentIndex].total + total;
      acc[currentIndex] = {
        ...acc[currentIndex],
        total: newTotal,
        foreign: isForeing ? total : 0,
        percent: isForeing
          ? (total * 100) / newTotal
          : acc[currentIndex].percent,
      };
    } else {
      acc.push({
        state: current.State,
        total: total,
        foreign: isForeing ? total : 0,
        percent: 100,
      });
    }

    return acc;
  }, []);
  return result;
};

export const formatValue = (value: number | string) => {
  if (typeof value === "number" && value % 1 > 0) {
    return value.toFixed(2);
  }
  return value;
};
