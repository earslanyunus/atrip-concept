import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, animate } from "framer-motion"
import clsx from "clsx"
import ComboBox from "./ComboBox"



type TripType = 'plane' | 'train' | 'bus' | 'car'
const locationSample = [
    {
        name: 'Istanbul',
        code: 'IST'
    },
    {
        name: 'Ankara',
        code: 'ANK'
    },
    {
        name: 'Izmir',
        code: 'IZM'
    },
    {
        name: 'Antalya',
        code: 'ANT'
    },
    {
        name: 'Adana',
        code: 'ADA'
    },
    {
        name: 'Bursa',
        code: 'BUR'
    },
    {
        name: 'Konya',
        code: 'KNY'
    },
    {
        name: 'Samsun',
        code: 'SMS'
    },
    {
        name: 'Trabzon',
        code: 'TRB'
    },
    {
        name: 'Erzurum',
        code: 'ERZ'
    },
    {
        name: 'Van',
        code: 'VAN'
    },
    {
        name: 'Diyarbakir',
        code: 'DIY'
    },
    {
        name: 'Gaziantep',
        code: 'GAZ'
    },
    {
        name: 'Mersin',
        code: 'MER'
    },
    {
        name: 'Kars',
        code: 'KRS'
    },
    {
        name: 'Kastamonu',
        code: 'KAS'
    },
    {
        name: 'Sinop',
        code: 'SIN'
    },
    {
        name: 'Sivas',
        code: 'SIV'
    },
    {
        name: 'Malatya',
        code: 'MAL'
    },
    {
        name: 'Kayseri',
        code: 'KAY'
    },
    {
        name: 'Kahramanmaras',
        code: 'KAH'
    },
    {
        name: 'Mardin',
        code: 'MAR'
    },
    {
        name: 'Sanliurfa',
        code: 'SAN'
    },
    {
        name: 'Tokat',
        code: 'TOK'
    },
    {
        name: 'Amasya',
        code: 'AMA'
    },
    {
        name: 'Ordu',
        code: 'ORD'
    },
    {
        name: 'Rize',
        code: 'RIZ'
    },
    {
        name: 'Artvin',
        code: 'ART'
    },
    {
        name: 'Ardahan',
        code: 'ARD'
    }
]


const TicketForm = ({ variant }: { variant: TripType }) => {

   



    return (
        <form className="">
            {variant === 'plane' &&(
                <div id="locationInput" className="">
               
                <div className="flex gap-4 ">
                    <ComboBox labelName="From" listElements={locationSample} />
                    <ComboBox labelName="To" listElements={locationSample} />
                </div>
            </div>
            )}
            
        </form >
    )
}
export default TicketForm