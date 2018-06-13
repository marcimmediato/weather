const changeToDay = epoch => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const day = new Date(epoch * 1000).getDay();
  return weekday[day];
};

export default changeToDay;
