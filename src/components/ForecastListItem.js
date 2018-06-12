import React from 'react';

export default props => {
  const { temp, weather, dt } = props.forecast;
  return <div>{changeToDay(dt)}</div>;
};

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
