import Atendee from "../components/attendee";
import Header from "../components/header";

export default function AttendeeDetails(){ 
    return(
        <div className="w-[100%] flex mb-[20px] flex-col items-center justify-center">
            <Header/>
            < Atendee/>
        </div>
    )
}