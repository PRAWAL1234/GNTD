/**
 * Truncates a string if it exceeds the specified length and adds a suffix.
 * @param text - The input text to format.
 * @param maxLength - The max allowed character length (default: 40).
 * @param suffix - The suffix to append if truncated (default: '...').
 * @returns Formatted string
 */
export const truncateText = (
  text?: string,
  maxLength: number = 40,
  suffix: string = "..."
): string => {
  if (!text) return ""
  return text.length > maxLength ? text.slice(0, maxLength) + suffix : text
}
