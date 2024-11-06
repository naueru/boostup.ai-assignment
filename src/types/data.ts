export type TNativity = "Native" | "Foreign born";
export type TParsedNativity = "foreign" | "total";

export interface INationYear {
  Year: number;
  Nativity: TNativity;
  "Total Population": number;
}
