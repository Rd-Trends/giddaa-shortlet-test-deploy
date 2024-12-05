// Currency symbols dictionary
const currencySymbols: { [key: string]: string } = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  INR: "₹",
  NGN: "₦", // Added Naira symbol
};

export const abbreviateCount = (
  count: number,
  currency = "NGN" as keyof typeof currencySymbols
) => {
  const value = new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  }).format(count);

  return ` ${currencySymbols[currency]}${value}`;
};
