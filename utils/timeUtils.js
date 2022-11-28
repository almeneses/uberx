export const humanizeDayTime = () => {
  const currentHour = new Date().getHours();
  let currentDayTime = 'morning';

  if (currentHour > 12 && currentHour < 18) {
    currentDayTime = 'afternoon';
  } else if (currentHour > 18 && currentHour <= 23) {
    currentDayTime = 'evening';
  }

  return currentDayTime;
};
