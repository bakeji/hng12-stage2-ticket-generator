import Header from "../components/header";
import TicketDet from "../components/ticketDet";

export default function TicketDetails(){
    return(
        <div className="w-[100%] flex flex-col items-center justify-center">
            <Header />
            <TicketDet />
        </div>
    )

}