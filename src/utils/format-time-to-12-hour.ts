export const formatTimeTo12Hour = (time: string) => {
  const [hour, minute] = time?.split(":")?.map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} ${ampm}`;
};
