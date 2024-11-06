export const stringToColor = (inputString: string) => {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    hash += inputString.charCodeAt(i) * 2;
  }

  const r = hash % 256;
  const g = (hash * 1) % 256;
  const b = (hash * 3) % 256;
  return `rgb(${r}, ${g}, ${b})`;
};
