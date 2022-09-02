import { eachDayOfInterval } from "date-fns";

const result = eachDayOfInterval({
  start: new Date(2014, 9, 6),
  end: new Date(2014, 9, 10),
}).map((d) => {
  return {
    dayOfMonth: d.getDate(),
    dayOfWeek: new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(d),
  };
});

console.log(result);
