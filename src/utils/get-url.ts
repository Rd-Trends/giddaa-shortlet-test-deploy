export const getURL = () => {
  return typeof window !== "undefined" ? window.location.href : "";
};
