export const getFormattedFullDate = dateString => {
  const date = new Date(dateString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  //   const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
  return formattedDate;
};
export const handleDateFormat = dateString => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
