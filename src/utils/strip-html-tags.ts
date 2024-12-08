export const stripHtmlTags = (html: string): string => {
  // Remove HTML tags
  const strippedText = html.replace(/<[^>]*>/g, "");

  // Remove extra whitespace
  const cleanedText = strippedText.trim().replace(/\s+/g, " ");

  return cleanedText;
};
