export const getAfterDateFromDay = (options) => {
  const { date, endDay } = options;
  const day = (date && new Date(date)) || new Date();
  const endDate = day;
  endDate.setDate(day.getDate() + endDay);
  return endDate;
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formateDate = (
  dateValue,
  format = "dd mm, yyyy"
) => {
  const initDate = new Date(dateValue);
  const date = initDate.getDate();
  const month = initDate.getMonth();
  const fullYear = initDate.getFullYear();
  switch (format) {
    case "dd mm, yyyy":
      return `${date} ${monthNames[month]}, ${fullYear}`;

    default:
      return "";
  }
};

export const getFullYear = (date) => {
  return new Date(date).getFullYear();
};
