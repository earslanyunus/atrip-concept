import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DateRange, DayPicker,ClassNames } from 'react-day-picker';
import * as Popover from '@radix-ui/react-popover';

import styles from   'react-day-picker/dist/style.module.css';

const customClasses:ClassNames = {
    ...styles,
    'day': '!text-slate-400 !bg-orange-200 ' +styles.day,
}

const DateInput = () => {


    const [tripDate, settripDate] = useState<DateRange | undefined>(undefined)


    return (
        <Popover.Root >
            <Popover.Trigger  asChild>
                <button className="p-4 border rounded-lg pl-12 w-full cursor-pointer" type="button" name="" id={'date'}  >Date</button>
            </Popover.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
                <Popover.Content asChild   >

                    
                    <motion.div
                    initial={{ opacity:0 }} animate={{ opacity:1 }} 
                        className='border bg-white     rounded shadow-sm    z-10 '  >
                        <DayPicker
                                classNames={customClasses}
                                captionLayout='dropdown'
                                fromYear={2023}
                                toYear={2024}
                                numberOfMonths={2}
                                mode='range'
                                selected={tripDate}
                                onSelect={settripDate}
                                    
                              
                                
                            />

                    </motion.div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
        // <div className="flex flex-col relative flex-1">
        //     <label htmlFor={'date'} className='text-slate-500'>Date</label>
        //     <div className='relative'>
        //         <input className="p-4 border rounded-lg pl-12 w-full cursor-pointer" type="button" name="" id={'date'} onClick={() => setIsOpen(true)}  />
        //         <span className='absolute left-2 top-1/2 -translate-y-1/2'><LocationIcon /></span>
        //     </div>
        //     <motion.div  animate={isOpen === true ? 'open' : 'closed'} initial={{ display: 'none', height: '0px' }} variants={variants} className='border bg-white  absolute rounded shadow-sm top-[86px] w-fit  z-10 '  >
        //         <div className='flex'>
        //             <DayPicker
        //                 captionLayout='dropdown-buttons'
        //                 fromYear={2023}
        //                 toYear={2024}
        //                 numberOfMonths={2}
        //                 mode='range'
        //                 selected={tripDate}
        //                 onSelect={settripDate}
        //             />

        //         </div>
        //     </motion.div>

        // </div>



    )
}
export default DateInput