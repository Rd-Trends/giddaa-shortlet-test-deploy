import { stripHtmlTags } from "./strip-html-tags";

export const getWordCount = (text: string): number => {
  if (!text) return 0;

  //  check if text contains any html tags
  const hasHtmlTags = /<[^>]*>/g.test(text);
  if (hasHtmlTags) {
    text = stripHtmlTags(text);
  }

  // Split by whitespace and count non-empty words
  return text.split(/\s+/).filter((word) => word.length > 0).length;
};
