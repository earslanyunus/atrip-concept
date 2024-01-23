"use client"
import Plane from "@/components/icons/Plane";
import Bus from "@/components/icons/Bus";
import Train from "@/components/icons/Train";
import Car from "@/components/icons/Car";
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from "react";
import { motion } from "framer-motion";
import PlaneForm from "./PlaneForm";



const TicketTabs = () => {
  const [active, setActive] = useState('tab-plane')

  return (
    <div className="p-12 bg-white rounded-lg shadow-sm w-[60vw] min-h-[400px]">
      <Tabs.Root value={active} onValueChange={(e) => setActive(e)}>
        <Tabs.List className="border border-slate-200 rounded-lg p-2 flex justify-between gap-3 mb-10">
          <Tabs.Trigger value="tab-plane" className="relative  data-[state=active]:text-[#554138]   py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 text-slate-400 transition-colors flex gap-1 w-full justify-center items-center"><Plane isActive={active} /><span className="z-10">Plane</span> 
          {active === 'tab-plane' && (
            <motion.span
            layoutId="bubble"
            className="absolute inset-0  bg-[#FFD5C2]"
            style={{ borderRadius: 8 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          )}
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-bus" className="relative data-[state=active]:text-[#554138]   py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 text-slate-400 transition-colors flex gap-1 w-full justify-center items-center"><Bus isActive={active} /><span className=" z-10">Bus</span>
          {active === 'tab-bus' && (
            <motion.span
            layoutId="bubble"
            className="absolute inset-0  bg-[#FFD5C2]"
            style={{ borderRadius: 8 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          )}
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-train" className="relative data-[state=active]:text-[#554138]   py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 text-slate-400 transition-colors flex gap-1 w-full justify-center items-center"><Train isActive={active} /><span className=" z-10">Train</span>
          {active === 'tab-train' && (
            <motion.span
            layoutId="bubble"
            className="absolute inset-0  bg-[#FFD5C2]"
            style={{ borderRadius: 8 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          )}
          </Tabs.Trigger>
          <Tabs.Trigger value="tab-car" className="relative data-[state=active]:text-[#554138]   py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 text-slate-400 transition-colors flex gap-1 w-full justify-center items-center"><Car isActive={active} /><span className=" z-10">Car</span>
          {active === 'tab-car' && (
            <motion.span
            layoutId="bubble"
            className="absolute inset-0  bg-[#FFD5C2]"
            style={{ borderRadius: 8 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          )}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab-plane" >
          <PlaneForm/>
         
          </Tabs.Content>
        <Tabs.Content value="tab-bus" > </Tabs.Content>
        <Tabs.Content value="tab-train" ></Tabs.Content>
        <Tabs.Content value="tab-car" ></Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
export default TicketTabs
