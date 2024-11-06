export type TNativity = "Native" | "Foreign born";
export type TParsedNativity = "native" | "foreignborn";

export interface INationYear {
  Year: number;
  Nativity: TNativity;
  "Total Population": number;
}
