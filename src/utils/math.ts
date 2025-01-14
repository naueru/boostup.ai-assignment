export const getNextRoundNumber = (num: number) => {
  const scale = Math.pow(10, `${num}`.length - 1);
  return Math.ceil(num / scale) * scale;
};
