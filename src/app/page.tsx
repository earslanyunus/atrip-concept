import Navbar from "@/components/common/Navbar";
import TicketTabs from "@/components/TicketTabs";


export default function Home() {

  return (
   <main className="min-h-screen min-w-screen ">
    <Navbar/>
    <div className="bg-slate-50 h-[calc(100svh-85px)] w-full flex justify-center items-center">
        <TicketTabs/>
    </div>
    </main>
  )
}
