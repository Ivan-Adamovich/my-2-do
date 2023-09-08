import { useState, useEffect, useMemo } from 'react';

export const useDate = () => {
  let todayDate: string = useMemo(() => {
    return new Date().toLocaleString().substr(0, 10);
  }, []);
  let weekDayNum: number = useMemo(() => {
    return new Date().getDay();
  }, []);

  const [weekDay, setWeekDay] = useState<string>('');

  useEffect(() => {
    switch (weekDayNum) {
      case 0:
        setWeekDay('Sunday');
        break;
      case 1:
        setWeekDay('Monday');
        break;
      case 2:
        setWeekDay('Tueusday');
        break;
      case 3:
        setWeekDay('Wednesday');
        break;
      case 4:
        setWeekDay('Thursday');
        break;
      case 5:
        setWeekDay('Friday');
        break;
      case 6:
        setWeekDay('Saturday');
        break;
      default:
        setWeekDay('');
        break;
    }
  }, [todayDate, weekDayNum]);

  return {
    todayDate,
    weekDayNum,
    weekDay,
  };
};
