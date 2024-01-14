"use client";

import * as React from "react";
import { addYears, endOfYear, format, getMonth, getYear, startOfYear } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { tr } from 'date-fns/locale';
export default function DatePickerDemo() {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "flex-1 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLLL dd, y",{locale:tr})} -{" "}
                {format(date.to, "LLLL dd, y",{locale:tr})}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          initialFocus
          numberOfMonths={2}
         

        />
      </PopoverContent>
    </Popover>
  );
}
