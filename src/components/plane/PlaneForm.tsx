"use client";

import { Button } from "@/components/ui/button";
import DatePickerDemo from "./DateInput";
import LocationInput from "./LocationInput";
import PassengerInput from "./PassengerInput";
import { usePlaneStore } from "@/store/plane";
import React from "react";


export default function ComboboxForm() {
  const {from,to,date,passenger} = usePlaneStore()
  const [toError, setToError] = React.useState("")
  const [fromError, setFromError] = React.useState("")
  const [dateError, setDateError] = React.useState("")
  const [passengerError, setPassengerError] = React.useState("")
  const submitHandle = (  ) =>{
    // from part
    if (from === "") {
      setFromError("Please select a location")
    }else{
      setFromError("")
      console.log(from);
      
    }
    // to part
    if (to === "") {
      setToError("Please select a location")

    }else{
      setToError("")
      console.log(to);
    }    
    // date part
    if (date === "") {
      setDateError("Please select a date")
    }else{

      setDateError("")
      console.log(date);
    }
    // passenger part
    if(passenger.adult === 0 && passenger.student === 0){
      setPassengerError("Please select a passenger")
    }else{
      setPassengerError("")
      
    }
    

    
  }
 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4    gap-x-8">
      
 
        <div>
        <LocationInput labelText="From" />
        {fromError.length >0 && <span className="row-start-3 text-sm font-medium text-red-500">{fromError}</span>}
        </div>
        <div>
        <LocationInput labelText="To" />
        {toError.length >0 && <span className="row-start-3 text-sm font-medium text-red-500">{toError}</span>}
        </div>
        <div>
        <DatePickerDemo labelText="Date" />
        {dateError.length >0 && <span className="row-start-3 text-sm font-medium text-red-500">{dateError}</span>}
        </div>
        <div>
        <PassengerInput labelText="Passenger" />
        {passengerError.length >0 && <span className="row-start-3 text-sm font-medium text-red-500">{passengerError}</span>}
        </div>

        <Button className=" mt-6 col-span-1 lg:col-span-2" onClick={submitHandle}>Submit</Button>
    </div>
  );
}
