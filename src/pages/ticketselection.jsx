import Header from "../components/header";
import Ticket from "../components/ticketsel";

export default function TicketSelection(){
    return(
        <div className="w-[100%] flex flex-col mb-[20px] items-center justify-center">
            <Header />
            <Ticket  />
        </div>
    )
}