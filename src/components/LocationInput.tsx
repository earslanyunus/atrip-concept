"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";
import { RiMapPin2Line } from "@remixicon/react";
import clsx from "clsx";

type Location = {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: number;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: number;
  subregion: string;
  subregion_id: number;
  nationality: string;
  timezones: string;
  latitude: number;
  longitude: number;
  emoji: string;
  emojiU: string;
};
type LocationArray = Location[];

export default function ComboboxDemo({
  labelText,
  placeholder,
  formaction,
}: {
  labelText: string;
  placeholder: string;
  formaction: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [locations, setLocations] = React.useState<LocationArray>([
   
  ]);
  const schemaName = labelText.toLowerCase();
  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const test = event.currentTarget;
    if (test.value !== "") {
      const data = await fetch(`api/countries/${test.value}`);
      const resp = await data.json();
      if (typeof resp.data === 'object' && resp.data !== null) {
        setLocations(resp.data);
        
      }
    } else {
      console.log('location sifirlandi');
      
      setLocations([]);
    }

   
  };

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
          <RiMapPin2Line className="fill-slate-500" />

          <span className="text-slate-400">{value || placeholder}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0 ">
        <Command className="">
          <CommandInput
            onKeyUp={handleSearch}
            placeholder="Search framework..."

          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                className="cursor-pointer py-3 hover:scale-105 transition-transform ease-out"
                key={location.iso3}
                value={location.name}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                  
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 ",
                    value === location.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {location.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
