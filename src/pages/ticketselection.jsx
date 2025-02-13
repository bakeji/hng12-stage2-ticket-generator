import Header from "../components/header";
import Ticket from "../components/ticketsel";

export default function TicketSelection(){
    return(
        <div className="w-[100%] flex flex-col items-center justify-center">
            <Header />
            <Ticket  />
        </div>
    )
}