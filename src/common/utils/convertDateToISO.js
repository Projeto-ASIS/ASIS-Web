export default function convertDateToISO(dateString) {
  const match = dateString.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (match) {
    const [, day, month, year] = match;
    return `${year}-${month}-${day}`;
  }

  return dateString
}