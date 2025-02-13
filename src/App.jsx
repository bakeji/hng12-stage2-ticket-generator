import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicketSelection from "./pages/ticketselection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketDetails from "./pages/ticket";
import { useState, useEffect } from "react";
import { TicketContext } from "./context/ticketcontext";
import useEventDB from "./indexedDb"

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



         
          const { saveEventData, isReady , loadEventData } = useEventDB()

          useEffect(() => {
            if (!isReady) return;
    
            const loadSavedData = async () => {
                try {
                    const data = await loadEventData();
                    if (data) {
                        setSelectedTicket(data.selectedTicket);
                        setPictureUrl(data.pictureUrl);
                        setAttendeeInfo(data.attendeeInfo);
                    }
                } catch (err) {
                    console.error('Error loading data:', err);
                }
            };
    
            loadSavedData();
        }, [isReady]);

        useEffect(() => {
            if (!isReady) return;
    
            const saveData = async () => {
                try {
                    await saveEventData({
                        selectedTicket,
                        pictureUrl,
                        attendeeInfo
                    });
                } catch (err) {
                    console.error('Error saving data:', err);
                }
            };
    
            saveData();
        }, [isReady, selectedTicket, pictureUrl, attendeeInfo]);


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