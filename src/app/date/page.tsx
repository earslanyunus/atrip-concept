"use client";
import clsx from "clsx";
import {
  add,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfWeek,
  format,
  getMonth,
  isSameDay,
  isSameMonth,
  isSameYear,
  isToday,
  lastDayOfMonth,
  lastDayOfYear,
  setMonth,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
  sub,
} from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Popover from "@radix-ui/react-popover";
import { RiCalendarLine } from "@remixicon/react";

const DatePage = () => {
  const [currentDay, setcurrentDay] = useState(startOfToday());
  const [currentMonth, setcurrentMonth] = useState(startOfMonth(currentDay));
  const [selectedDate, setselectedDate] = useState<Date | string>("");
  const handleClickDate = (e: React.MouseEvent<HTMLTimeElement>) => {
    const dateTime = e.currentTarget.getAttribute("dateTime");

    if (dateTime ){
      const newDAte = new Date(dateTime);
      setselectedDate(newDAte);
    }

    
  }
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
    <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-slate-900 ">
      <Popover.Root>
        <Popover.Trigger asChild >
          <div className="relative cursor-pointer">
            <RiCalendarLine className="fill-slate-300 absolute -translate-y-1/2 top-1/2 left-2"/>
          <input type="button" value={selectedDate ? format(selectedDate, "dd MMMM yyyy") : "Tarih Sec"}  className=" border rounded-lg border-slate-300 pl-10 p-3 text-slate-300 dark:bg-slate-900 pr-16 cursor-pointer" />
              
         
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content asChild>
            <div className="border rounded-xl pt-4">
              <div className="flex justify-between items-center px-4">
                <button
                  className="text-slate-300 hover:text-slate-500"
                  type="button"
                  name=""
                  id=""
                  onClick={onClickPrev}
                >
                  Prev
                </button>
                <div className="flex gap-4">
                  {/* month select */}
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <span className="cursor-pointer">
                        {format(currentMonth, "MMMM")}
                      </span>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded shadow-sm p-2 flex flex-col">
                        {allMonths.map((month) => {
                          return (
                            <DropdownMenu.Item
                              key={month.toString()}
                              asChild
                              className="outline-none p-2 cursor-pointer hover:bg-slate-200 rounded data-[highlighted]:bg-slate-200"
                            >
                              <span
                                onClick={() => setSelectedMonth(month)}
                                className={clsx(
                                  "",
                                  isSameMonth(month, currentMonth)
                                    ? " text-slate-700 font-bold bg-orange-200"
                                    : "text-slate-500"
                                )}
                              >
                                {format(month, "MMMM")}
                              </span>
                            </DropdownMenu.Item>
                          );
                        })}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  {/* years select */}
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <span className="cursor-pointer">
                        {format(currentDay, "yyyy")}
                      </span>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="bg-white rounded shadow-sm p-2 flex flex-col">
                        {years.map((year) => {
                          return (
                            <DropdownMenu.Item
                              key={year.toString()}
                              asChild
                              className="outline-none p-2 cursor-pointer hover:bg-slate-200 rounded data-[highlighted]:bg-slate-200"
                            >
                              <span
                                onClick={() => setYear(year)}
                                className={clsx(
                                  "",
                                  isSameYear(year, currentDay)
                                    ? " text-slate-700 font-bold bg-orange-200"
                                    : "text-slate-500"
                                )}
                              >
                                {format(year, "yyyy")}
                              </span>
                            </DropdownMenu.Item>
                          );
                        })}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
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
                className="grid grid-cols-7  w-fit  shadow-sm "
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
                            isSameMonth(day, currentMonth)
                              ? "text-slate-600"
                              : "",
                            isToday(day) ? "" : ""
                          )}
                        >
                          <time onClick={handleClickDate} dateTime={format(day, "yyyy-MM-dd")}>
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
                          {
                            isSameDay(day, selectedDate) && (
                              <motion.span
                                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                                animate={{ scale: 1 }}
                                transition={{
                                  type: "spring",
                                  duration: 0.5,
                                  bounce: 0.6,
                                }}
                                className="bg-slate-400 w-5/6 h-5/6 absolute  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  rounded-full -z-10"
                              ></motion.span>
                            )

                          }
                        </span>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
export default DatePage;
