const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date) => {
  console.log(date);
  if (!date) return "N/A";

  return new Date(date).toLocaleDateString("en-US", options);
};
