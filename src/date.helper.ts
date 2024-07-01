/**
 * return date after certain number of days in format YYYY-mm-dd
 * @param days
 */
export const dateAfterDays = function (days: number = 0): string {
  const nextDate = new Date();
  if (days != 0) nextDate.setDate(nextDate.getDate() + days);
  return nextDate.toISOString().split("T")[0];
};

/**
 * return today in format YYYY-mm-dd
 */
export const today = function (): string {
  return new Date().toISOString().split("T")[0];
};

export const formatDateToDDMMYYYY = function (date: Date|string): string{
  if( typeof date == 'string')
    date = new Date(date);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
