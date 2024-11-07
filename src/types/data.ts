export type TNativity = "Native" | "Foreign born";
export type TParsedNativity = "foreign" | "total";

export interface INationYear {
  Year: number;
  Nativity: TNativity;
  "Total Population": number;
}

export interface IYearState {
  "ID Nativity": number;
  "ID State": number;
  "ID Year": number;
  Nativity: TNativity;
  "Slug State": string;
  State: string;
  "Total Population": number;
  Year: number;
}
