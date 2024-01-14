"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {Button} from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";
import {RiMapPin2Line} from '@remixicon/react'
import clsx from "clsx";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ComboboxDemo({ labelText,placeholder }: { labelText: string,placeholder:string }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          labelText={labelText}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx("w-full justify-start gap-3 py-6 text-slate-400 ",value !== "" &&"text-slate-700")}
        >
                      <RiMapPin2Line className="fill-slate-500"/>

          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : `${placeholder}`}
        </Button>
        
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0 ">
        <Command className="">
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="cursor-pointer py-3 hover:scale-105 transition-transform ease-out"
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4 ",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
