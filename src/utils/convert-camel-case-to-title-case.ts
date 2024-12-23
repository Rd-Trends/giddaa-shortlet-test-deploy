export const convertCamelCaseToTitleCase = (str: string) => {
  if (str === "hasPoPCeiling") return "POP Ceiling";
  if(str === "hasWineCeller") return "Wine Cellar";

  const result = str.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult.replace("Has ", "");
};
