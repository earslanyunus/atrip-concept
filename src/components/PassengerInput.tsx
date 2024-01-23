"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiUserLine } from "@remixicon/react";
import clsx from "clsx";
import * as React from "react";
import PassengerSelect from "./PassengerSelect";
import usePersonStore from "@/store/data";

const cabinClasses = [
  {
    value: "economy",
    label: "Economy",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "first",
    label: "First Class",
  },
];

export default function PassengerInput({
  labelText,
  placeholder,
}: {
  labelText: string;
  placeholder: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("economy");
  const firstname = usePersonStore((state)=>state.firstName)
  


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          labelText={labelText}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx(
            "w-full justify-start gap-3 py-6 text-slate-400 ",
            value !== "" && "text-slate-700"
          )}
        >
          <RiUserLine className="fill-slate-500" />

          {value
            ? cabinClasses.find((cabinClass) => cabinClass.value === value)
                ?.label
            : `${placeholder}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-5  ">
        <div className="flex flex-col items-center">
        
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="my-select"> Cabin select </Label>
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger id="my-select" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cabinClasses.map((cabinClass) => {
                  return (
                    <SelectItem key={cabinClass.value} value={cabinClass.value}>
                      {cabinClass.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-6 w-full mt-6">
                  <h1>{firstname}</h1>
                  <div className="flex">
                  <PassengerSelect label="Adult" labelId='adult-passenger-select' defaultVal={1}/>
                  <PassengerSelect label="Student" labelId='student-passenger-select' defaultVal={0}/>
                  </div>
                  <div className="flex">
                  <PassengerSelect label="Child" labelId='child-passenger-select' defaultVal={0}/>

                  <PassengerSelect label="Baby" labelId='baby-passenger-select' defaultVal={0}/>
                  </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}