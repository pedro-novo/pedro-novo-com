export const labelDict = (value: number) => {
  switch (value) {
    case 1:
      return "Novice";
    case 2:
      return "Mid";
    case 3:
      return "Proficient";
    case 0:
    default:
      return "";
  }
};
