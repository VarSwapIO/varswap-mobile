import dayjs from "dayjs";
import moment from "moment";

export const ONE_SECOND_MS = 1000;
export const ONE_MINUTE_MS = 60 * ONE_SECOND_MS;
export const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
export const ONE_DAY_MS = 24 * ONE_HOUR_MS;

export function isStale(
  lastUpdated: number | null,
  staleTime: number
): boolean {
  return !lastUpdated || Date.now() - lastUpdated > staleTime;
}

export function currentTimeInSeconds(): number {
  return dayjs().unix(); // in seconds
}

export function inXMinutesUnix(x: number): number {
  return dayjs().add(x, "minute").unix();
}

export const formatDateTime = (time: number | string) => {
  return moment(time).format("MMMM Do YYYY, h:mm A");
};

export const calculateTimeLeft = (startTime: string) => {
  let difference = +startTime - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
};

export const getCurrentDayWeek = () => {
  const currentDate = moment();
  const weekStart = currentDate.clone().startOf("isoWeek").add(1, "d");
  const weekEnd = currentDate.clone().endOf("isoWeek");
  const current_day = moment().utc().format("DD-MM-YYYY");
  const current_week = `${moment(weekStart)
    .utc()
    .format("DD-MM-YYYY")} - ${moment(weekEnd).utc().format("DD-MM-YYYY")}`;
  return {
    current_day,
    current_week,
  };
};

export function dateFromNow(dateString: string) {
  return moment(dateString).fromNow();
}
