"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PassengerInput from "./PassengerInput";
import ComboboxDemo from "./LocationInput";
import DatePickerDemo from "./DateInput";
import PassengerSelect from "./PassengerSelect";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const FormSchema = z.object({
  // from have to  min 3 chracater
  from: z.string({
    required_error: "Please select from destination.",
  }).min(3),
  to: z.string({
    required_error: "Please select to destination.",
  }),
  date: z.union([z.date({
    required_error: "Please select date.",
  }), z.object({ from: z.date(), to: z.date() })],{
    required_error: "Please select date.",
  }),
  passenger: z.object({
    cabin: z.string(),
    adult: z.number(),
    child: z.number(),
    baby: z.number(),
    student: z.number(),
  }),
});

export default function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2    gap-x-8"
      >
        <FormField
          control={form.control}
          name="from"
          render={({ field }) => {
            return (
              <FormItem >
                <FormControl>
                  <ComboboxDemo
                    labelText="From"
                    placeholder="Airport-City or Country"
                    formaction={form.setValue}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => {
            return (
              <FormItem className="">
                <FormControl>
                  <ComboboxDemo
                    labelText="To"
                    placeholder="Airport-City or Country"
                    formaction={form.setValue}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => {
            return (
              <FormItem className="">
                <FormControl>
                  <DatePickerDemo labelText="Date" formaction={form.setValue} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
           <FormField
          control={form.control}
          name="passenger"
          render={({ field }) => {
            return (
              <FormItem className="">
                <FormControl>
                  <PassengerInput  labelText="Passenger" formaction={form.setValue} />
                  
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button className=" mt-6 col-span-1 lg:col-span-2" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
