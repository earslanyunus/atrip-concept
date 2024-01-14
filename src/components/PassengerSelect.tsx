"use client";

import { Button } from "@/components/ui/button";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { count } from "console";

export default function PassengerSelect(){
    const [adultCount,setAdultCount] = useState(1)
    const handleCount=()=>{
        
    }

    return(
        <div className="flex flex-col gap-1 items-start justify-between w-full ">
                
            <Label htmlFor="my-pass" className="text-base">Adult</Label>
          
            <div className="flex gap-2">
            <Button variant="outline" disabled={adultCount ===1} className="px-2" size="icon" onClick={()=>adultCount <=1? setAdultCount(1):setAdultCount(adultCount-1)}>
              <RiSubtractLine className="h-4 w-4" />
            </Button>
            <Input id="my-pass" type="text" size={1} maxLength={2} className="  text-center" value={adultCount} onChange={(count)=>setAdultCount(parseInt(count.target.value))}/>
            <Button variant="outline" className="px-2" size="icon" onClick={()=>setAdultCount(adultCount+1)}>
              <RiAddLine className="h-4 w-4" />
            </Button>
            </div>
          </div>
    )
}