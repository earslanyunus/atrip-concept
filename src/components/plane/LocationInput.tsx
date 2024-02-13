"use client"

import { Check } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { RiEarthLine, RiMapPinLine, RiMapPinRangeLine, RiPlaneLine } from "@remixicon/react"
import { usePlaneStore } from "@/store/plane"


export default function ComboboxDemo({labelText}:{labelText:string,}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [locations, setLocations] = React.useState<any>([])
  const {setFrom,setTo} = usePlaneStore()

  const searchHandle = async (deger:string) => {
    
    if (deger.length>0) {
      const response = await fetch(`/api/countries/${deger}`)
      const data = await response.json()
      setLocations(data.data)


    }else{
      setLocations([])
      setValue('Select destination...')
    }
  }
  React.useEffect(()=>{
    // write to store
    if (labelText === 'From') {
      setFrom(value)
    }
    if (labelText === 'To') {
      setTo(value)
    }
    
  },[value])

    

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex gap-1 flex-col">
          <p className="text-slate-500">{labelText}</p>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start gap-3   py-4 px-4 min-h-[50px]"
        >
          <RiMapPinLine className="fill-slate-500"/>
          {value
            ? locations.find((location:any) => location.name.toLowerCase() === value)?.name||'Select destination'
            : "Select destination"
           
            
            }
            
        </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Select destination" onValueChange={searchHandle}/>
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location:any) => (
              <CommandItem
                key={location.id}
                value={location.name}
                onSelect={(currentValue) => {
                  
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)

                  
                }}
                className="cursor-pointer"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === location.name.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {location?.numeric_code && <RiEarthLine className="opacity-30 mr-2"/>}
                {location?.country_name && <RiMapPinRangeLine className="opacity-30 mr-2"/>}
                {location?.iata_code && <RiPlaneLine className="opacity-30 mr-2"/>}{location.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
