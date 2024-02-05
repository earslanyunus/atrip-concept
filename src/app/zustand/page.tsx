
import PassengerInput from "@/components/plane/PassengerInput"
import usePersonStore from "@/store/data"

export default function Page(){
    return(
        <div>
            <h1>Page</h1>
            <PassengerInput labelText="Passenger, Cabin" placeholder="1 Person/Economy"/>
        </div>
    )
}