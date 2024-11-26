/**
 * converts a byte val to human readable val
 * @param {number} bytes
 * @returns {string}
 * @throws {Error} error if bytes is negative
 */

export default function bytesToSize(bytes: number): string {
  if(bytes < 0) throw new Error("Bytes can not be negative.");
  if(bytes == 0) return "0 Bytes";
  
  const units: string[] = ["Bytes","KB","MB","GB","TB"];
  const i = Math.min(Math.floor(Math.log2(bytes) / 10), units.length - 1);
  const size = (bytes / Math.pow(1024, i)).toFixed(2);

  return `${size} ${units[i]}`;
}