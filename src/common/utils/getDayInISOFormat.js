export default function getDayInISOFormat(isoDate) {
  const match = isoDate.match(/^\d{4}-\d{2}-(\d{2})$/);
  return match ? match[1] : null;
}