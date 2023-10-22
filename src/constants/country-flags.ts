export type CountryFlag = {
  id: number;
  language: "en" | "pt" | "es";
  title: string;
  icon: string;
};

export const countryFlags: CountryFlag[] = [
  { id: 1, language: "en", title: "united-kingdom-flag", icon: "./uk.png" },
  { id: 2, language: "es", title: "spain-flag", icon: "./spain.png" },
  { id: 3, language: "pt", title: "portugal-flag", icon: "./portugal.png" },
];
