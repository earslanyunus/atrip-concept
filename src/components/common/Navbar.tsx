
import Image from "next/image";
import DarkMode from "../icons/DarkMode";
import Profile from "../icons/Profile";




export default function Navbar() {
    return (
 <nav className="w-screen bg-white   border-b border-slate-200">
            <div className="container mx-auto py-[18px] flex justify-between">
                <div>
                    <Image src={'/logo.svg'} alt="atrip logo" width={95} height={36} priority={true} />
                </div>
                <div className="flex items-center">
                    <a href="" className="btn-primary me-6">Let&apos;s Explore</a>
                    <button className="h-fit p-1 me-2"><DarkMode/></button>
                    <button className="h-fit p-1"><Profile/></button>
                </div>
            </div>
        </nav> 
      
       
    )
}
 