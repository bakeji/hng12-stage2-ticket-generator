import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicketSelection from "./pages/ticketselection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketDetails from "./pages/ticket";
import { useState } from "react";
import { TicketContext } from "./context/ticketcontext";

export default function App() {


            const ticketTypes = [{id: 1, name: "Regular Access", type:'free', price: 'Free', time: "20:52"},
                                 {id: 2, name: "VIP Access", type:'VIP', price: "$150", time: "20:52"}, 
                                 {id: 3, name: "VVIP Access", type:'VVIP', price: "$150", time: "20:52"}
                                ];

            
            const [selectedTicket, setSelectedTicket] = useState({
            ticket: "free",
            quantity: 1
        })
        const [pictureUrl, setPictureUrl]= useState("")
        const [attendeeInfo, setAttendeeInfo] = useState({
            name: "",
            email: "",
            text: "nil",
    })
    
        function handleChange(e){
            const {name, value} = e.target
            setSelectedTicket((prev) => ({
                ...prev,
                [name]: value
            }))
    
        }     
        
        console.log(selectedTicket)
    return(
        <TicketContext.Provider value={{selectedTicket, ticketTypes, setSelectedTicket, pictureUrl, setPictureUrl, attendeeInfo, setAttendeeInfo, handleChange}}>
        <div className="w-[100%] min-h-[100vh] flex flex-col items-center justify-center custom-gradient "> 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TicketSelection  />} />
                    <Route path="/attendee" element={<AttendeeDetails />} />
                    <Route path="/ticket" element={<TicketDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
        </TicketContext.Provider>
    )
}