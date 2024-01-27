"use client";

import { Button } from "@/components/ui/button";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { count } from "console";

export default function PassengerSelect({labelId,label,defaultVal}:{labelId:string,label:string,defaultVal:number}){
    const [adultCount,setAdultCount] = useState(defaultVal)
    const handleCount=()=>{
        
    }

    return(
        
    )
}