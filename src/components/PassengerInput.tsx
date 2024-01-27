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
import { RiAddLine, RiSubtractLine, RiUserLine } from "@remixicon/react";
import clsx from "clsx";
import * as React from "react";
import PassengerSelect from "./PassengerSelect";
import usePersonStore from "@/store/data";
import { Input } from "./ui/input";

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
  formaction,
}: {
  labelText: string;
  formaction: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Economy");
  const [adultCount, setAdultCount] = React.useState(1);
  const [studentCount, setStudentCount] = React.useState(0);
  React.useEffect(() => {
    formaction('passenger',{
      cabin: value,
      adult: adultCount,
      student: studentCount,
      child:0,
      baby:0


    })
    
  }, [value, formaction,adultCount,studentCount]);

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

          {value === "economy" && adultCount === 1 && studentCount === 0
            ? "1 person, Economy"
            : `${adultCount + studentCount} person,${value} `}
            
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
                    <SelectItem key={cabinClass.value} value={cabinClass.label}>
                      {cabinClass.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-6 w-full mt-6">
            <div className="flex">
              <div className="flex flex-col gap-1 items-start justify-between w-full ">
                <Label htmlFor="adult" className="text-base">
                  Adult
                </Label>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled={adultCount < 1}
                    className="px-2"
                    size="icon"
                    onClick={() =>{
                      if (studentCount >0) {
                        adultCount < 1 ? "" : setAdultCount(adultCount - 1)

                      }
                    }
                    }
                  >
                    <RiSubtractLine className="h-4 w-4" />
                  </Button>
                  <Input
                    id="adult"
                    type="text"
                    size={1}
                    maxLength={2}
                    className="  text-center"
                    value={adultCount}
                    onChange={(count) =>
                      setAdultCount(parseInt(count.target.value))
                    }
                  />
                  <Button
                    variant="outline"
                    className="px-2"
                    size="icon"
                    onClick={() => setAdultCount(adultCount + 1)}
                  >
                    <RiAddLine className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-between w-full ">
                <Label htmlFor="student" className="text-base">
                  Student
                </Label>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    disabled={studentCount < 1 }
                    className="px-2"
                    size="icon"
                    onClick={() =>{
                      if(adultCount < 1 && studentCount === 1) return
                    
                      studentCount < 1 ? "" : setStudentCount(studentCount - 1)
                    } }
                  >
                    <RiSubtractLine className="h-4 w-4" />
                  </Button>
                  <Input
                    id="student"
                    type="text"
                    size={1}
                    maxLength={2}
                    className="  text-center"
                    value={studentCount}
                    onChange={(count) =>
                      setStudentCount(parseInt(count.target.value))
                    }
                  />
                  <Button
                    variant="outline"
                    className="px-2"
                    size="icon"
                    onClick={() => setStudentCount(studentCount + 1)}
                  >
                    <RiAddLine className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="flex">
                  <PassengerSelect label="Adult" labelId='adult-passenger-select' defaultVal={1}/>
                  <PassengerSelect label="Student" labelId='student-passenger-select' defaultVal={0}/>
                  </div>
                  <div className="flex">
                  <PassengerSelect label="Child" labelId='child-passenger-select' defaultVal={0}/>

                  <PassengerSelect label="Baby" labelId='baby-passenger-select' defaultVal={0}/>
                  </div> */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
