"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import {
  add,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfWeek,
  format,
  getMonth,
  isSameMonth,
  isSameYear,
  isThisMonth,
  isToday,
  lastDayOfMonth,
  lastDayOfYear,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
  sub,
  setMonth,
} from "date-fns";

const DatePage = () => {
  const [currentDay, setcurrentDay] = useState(startOfToday());
  const [currentMonth, setcurrentMonth] = useState(startOfMonth(currentDay));

  const daysofCurrentMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDay)),
    end: endOfWeek(lastDayOfMonth(currentDay)),
  });
  const daysOfWeeks = eachDayOfInterval({
    start: startOfWeek(currentDay),
    end: endOfWeek(currentDay),
  });

  const onClickPrev = () => {
    const prevMonth = sub(currentDay, { months: 1 });
    setcurrentDay(prevMonth);
    setcurrentMonth(startOfMonth(prevMonth));
  };
  const onClickNext = () => {
    const nextMonth = add(currentDay, { months: 1 });
    setcurrentDay(nextMonth);
    setcurrentMonth(startOfMonth(nextMonth));
  };
  const allMonths = eachMonthOfInterval({
    start: startOfYear(currentDay),
    end: lastDayOfYear(currentDay),
  });

  const setSelectedMonth = (month: Date) => {
    setcurrentDay(month);
    setcurrentMonth(startOfMonth(month));
  };

  const years = useMemo(() => {
    return eachYearOfInterval({
      start: startOfYear(currentDay),
      end: add(startOfYear(currentDay), { years: 2 }),
    });
  }, []);

  const setYear = (year: Date) => {
    const newYearWithSelectedMonth = setMonth(year, getMonth(currentMonth)); // Set month to January
    setcurrentDay(newYearWithSelectedMonth);
    setcurrentMonth(startOfMonth(newYearWithSelectedMonth));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <div className="grid grid-cols-4 gap-2"></div>
        <div className="grid grid-cols-4 gap-2">
          {years.map((year, index) => {
            return (
              <div
                key={year.toString()}
                className={clsx(
                  "p-4 border rounded-lg cursor-pointer",
                  isSameYear(year, currentMonth) ? "bg-orange-200" : ""
                )}
                onClick={() => setYear(year)}
              >
                <span className="text-slate-300">{format(year, "yyyy")}</span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <button
            className="text-slate-300 hover:text-slate-500"
            type="button"
            name=""
            id=""
            onClick={onClickPrev}
          >
            Prev
          </button>
          <span className="text-slate-300">
            <select name="" id="">
            {allMonths.map((month) => {
              return <option>{format(month, "MMMM")}</option>;
            })}
            </select>
          </span>
          <button
            className="text-slate-300 hover:text-slate-500"
            type="button"
            name=""
            id=""
            onClick={onClickNext}
          >
            Next
          </button>
        </div>

        <motion.div
          layout="size"
          style={{
            originY: 1,
          }}
          className="grid grid-cols-7  w-fit border shadow-sm rounded"
          transition={{
            type: "spring",
            duration: 0.4,
            bounce: 0.4,
          }}
        >
          {daysOfWeeks.map((day, index) => {
            return (
              <div
                key={day.toString()}
                className={clsx(
                  "",
                  index !== daysOfWeeks.length - 1
                    ? "border-r border-slate-50"
                    : ""
                )}
              >
                <span
                  className={clsx(
                    "text-slate-400 font-bold w-full   relative flex items-center justify-center    px-2 py-4"
                  )}
                >
                  <span className="text-center w-full">
                    {format(day, "EEE")}
                  </span>
                </span>
              </div>
            );
          })}
          <AnimatePresence mode="wait">
            {daysofCurrentMonth.map((day, index) => {
              return (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={day.toString()}
                  className={clsx(
                    index % 7 === 6 ? "" : "border-r border-slate-50",
                    " p-3"
                  )}
                >
                  <span
                    className={clsx(
                      "text-slate-300 w-10 h-10 relative flex items-center justify-center cursor-pointer hover:bg-slate-200 rounded-full transition-colors duration-200 px-2 py-1",
                      isSameMonth(day, currentMonth) ? "text-slate-600" : "",
                      isToday(day) ? "" : ""
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "dd")}
                    </time>

                    {isToday(day) && (
                      <motion.span
                        initial={{ scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          duration: 0.5,
                          bounce: 0.6,
                        }}
                        className="bg-orange-400 w-5/6 h-5/6 absolute  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  rounded-full -z-10"
                      ></motion.span>
                    )}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
export default DatePage;
