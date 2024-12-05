/**
 * Options for customizing currency formatting
 */
interface CurrencyFormatOptions {
  currency?:
    | "USD"
    | "EUR"
    | "GBP"
    | "JPY"
    | "CNY"
    | "AUD"
    | "CAD"
    | "CHF"
    | "INR"
    | "NGN";
  symbol?: boolean;
  thousandsSeparator?: string;
  decimalSeparator?: string;
  decimalPlaces?: number;
  locale?: string;
}

/**
 * Formats a numeric value as a currency string with customizable options
 * @param amount The monetary amount to format
 * @param options Formatting options
 * @returns Formatted currency string
 */

function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {}
): string {
  // Default options
  const {
    currency = "NGN",
    symbol = true,
    thousandsSeparator = ",",
    decimalSeparator = ".",
    decimalPlaces = 0,
    locale = "en-NG",
  } = options;

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

  // Validate and get currency symbol
  const symbolPrefix = symbol ? currencySymbols[currency] || currency : "";

  // Use Intl.NumberFormat for precise number formatting
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    useGrouping: true,
  });

  // Format the number
  const formattedNumber = formatter.format(Math.abs(amount));

  // Replace default separators if needed
  const formattedWithCustomSeparators = formattedNumber
    .replace(/,/g, thousandsSeparator)
    .replace(/\./g, decimalSeparator);

  // Combine sign, symbol, and formatted number
  const formattedCurrency = `${
    amount < 0 ? "-" : ""
  }${symbolPrefix}${formattedWithCustomSeparators}`;

  return formattedCurrency;
}

// Export for use in modules
export { formatCurrency };
