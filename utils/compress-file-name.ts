/**
 * Compresses a file name if it exceeds a specified length, keeping the file extension intact.
 * Example: "verylongfilenameexample.txt" -> "verylongfile...ple.txt"
 *
 * @param fileName - The name of the file to compress.
 * @param maxLength - The maximum allowed length for the entire compressed file name (default: 18).
 * @returns The compressed file name or the original name if it's within the allowed length.
 * @throws Error if `fileName` is not a valid string.
 */
export default function compressFileName(
  fileName: string,
  maxLength = 18
): string {
  if (typeof fileName !== "string") {
    throw new Error("Invalid input: fileName must be a string.");
  }

  if (fileName.length <= maxLength) {
    return fileName.trim();
  }

  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex === -1) {
    throw new Error("Invalid fileName: No file extension found.");
  }

  const fileNameWithoutExtension = fileName.slice(0, dotIndex);
  const fileExtension = fileName.slice(dotIndex);

  const ellipsis = "...";
  const availableLength = maxLength - fileExtension.length - ellipsis.length;

  if (availableLength <= 0) {
    throw new Error(
      "Invalid maxLength: Too small to fit the file extension and ellipsis."
    );
  }

  const start = fileNameWithoutExtension.slice(
    0,
    Math.ceil(availableLength / 2)
  );
  const end = fileNameWithoutExtension.slice(-Math.floor(availableLength / 2));

  return `${start}${ellipsis}${end}${fileExtension}`;
}
