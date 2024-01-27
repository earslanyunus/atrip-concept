"use client";
import { Transition } from '@headlessui/react'

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";
export default function DatePickerDemo({ labelText, formaction }: { labelText: string,formaction:any }) {
  const [tripDateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );
  const [tripDate, setDate] = React.useState<Date | undefined>(undefined);
  const [checked, setChecked] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<"range" | "single">("range");
    React.useEffect(()=>{
    if(tripDateRange !== undefined){
      formaction('date',tripDateRange);
    }
    if(tripDate !== undefined){
      formaction('date',tripDate);
    }


    },[tripDateRange,tripDate,formaction])


  const checkedHandle = (isChecked: boolean) => {
    setChecked(isChecked);
    setDate(undefined);
    setDateRange(undefined);
    if (isChecked) {
      setMode("single");
    } else {
      setMode("range");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          labelText={labelText}
          variant={"outline"}
          className={cn(
            "flex-1 justify-start text-left font-normal py-3",
            !tripDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {/* First check mode then check date state of mode */}
          {mode === "range" ? (
            tripDateRange === undefined ? (
              <span>Pick a date</span>
            ) : (
              tripDateRange.to &&
              tripDateRange.from && (
                <>
                  {format(tripDateRange.from, "LLLL dd, y", { locale: tr })} -
                  {format(tripDateRange.to, "LLLL dd, y", { locale: tr })}
                </>
              )
            )
          ) : tripDate === undefined ? (
            <span>Pick a date</span>
          ) : (
            format(tripDate, "LLLL dd, y", { locale: tr })
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div>
        
            
          {mode === "range" && (
             <Calendar
              initialFocus
              numberOfMonths={2}
              mode={"range"}
              selected={tripDateRange}
              onSelect={setDateRange}
            />
          )}
          {mode === "single" && (
            <Calendar
              initialFocus
              numberOfMonths={1}
              mode={"single"}
              selected={tripDate}
              onSelect={setDate}
            />
          )}
          <div className="flex items-center space-x-2 p-3">
            <Switch
              id="airplane-mode"
              checked={checked}
              onCheckedChange={checkedHandle}
            />
            <Label htmlFor="airplane-mode">One Way</Label>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
