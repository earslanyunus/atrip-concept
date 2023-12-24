"use client"

import {AnimatePresence, motion} from 'framer-motion'
import { useState, useEffect } from 'react'
import LocationIcon from './icons/Location'
const variants = {
    open: {
        opacity: 1,
        display: 'block',
        height: 'auto',
        transition: {
            type: 'spring',
            duration: 0.8,
            bounce: 0.5


        }

    },
    closed: {
        height: '0px',
        opacity: 0,
        transition: {
            type: 'spring',
            duration: 0.3,

        },
        transitionEnd: {
            display: 'none'
        }

    }
}

type ComboBoxProps = {
    labelName: string;
    listElements: { name: string; code: string }[]
}  
const ComboBox = ({listElements,labelName}: ComboBoxProps) => {
   
    
    
    const [inputValue, setInputValue] = useState('')
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const [locations, setLocations] = useState<{ name: string; code: string }[]>(listElements);

    useEffect(() => {
        setLocations(listElements.filter((location) => location.name.toLowerCase().includes(inputValue.toLowerCase())))







    }, [inputValue, listElements])
 const locationClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setInputValue(e.currentTarget.textContent || '')
    }
    return(
        <div className="flex flex-col relative flex-1">
        <label htmlFor={labelName} className='text-slate-500'>{labelName}</label>
        <div className='relative'>
        <input className="p-4 border rounded-lg pl-12 w-full"   type="text" name="" id={labelName} value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} onFocus={() => setIsOpen(true)} onBlur={() => setTimeout(() => { setIsOpen(false) }, 100)} />
        <span className='absolute left-2 top-1/2 -translate-y-1/2'><LocationIcon/></span>
        </div>
        <motion.div style={{ overflow: "scroll" }} animate={isOpen === true ? 'open' : 'closed'} initial={{ display: 'none', height: '0px' }} variants={variants} className='border bg-white  absolute rounded shadow-sm top-[86px] w-full  z-10 max-h-72'  >
            <AnimatePresence >
            {locations.map((location, index) => (
                <motion.div  initial={{ opacity:0 }} animate={{ opacity:1 }} whileHover={{scale:1.02}}  exit={{opacity:0}} transition={{duration:0.2,type:'spring'}} key={location.code} onClick={locationClickHandler} className=" hover:bg-slate-100 m-4 cursor-pointer    p-4 rounded">{location.name}</motion.div>

            ))}
            </AnimatePresence>
        </motion.div>

            </div>
    )
}
export default ComboBox
