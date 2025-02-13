import { useContext, useEffect } from "react"
import { TicketContext } from "../context/ticketcontext"

export default function TicketDet(){
const {pictureUrl, selectedTicket, setPictureUrl, attendeeInfo } = useContext(TicketContext)
    useEffect(() => {
        const savedImage = localStorage.getItem("savedImage");
        if (savedImage) {
            setPictureUrl(savedImage);
        }
    }, []);
console.log(pictureUrl)
    return(
        <div className="w-[37%] mt-[40px] mb-[30px] h-max p-[20px] border-[#0E464F] rounded-[40px] border-[1px]">
            <div className="flex items-start flex-col justify-center w-[100%] ">
                <div className="flex items-center  justify-between w-[100%]">
                    <h1 className= "text-[#ffffff] font-jeju font-[400] text-[32px]">Ready</h1>
                    <p className= "text-[#ffffff] font-jeju font-[400] text-[16px]">Step 3/3</p>
                </div>
                <div className="w-[100%] h-[4px] bg-[#0E464F] mt-[5px] rounded-[5px]">
                    <div  className="w-[100%] h-[100%] bg-[#24A0B5]"></div>
                </div >
            </div>

            <div className="flex items-center mt-[5px] text-white text-center justify-center flex-col gap-1">
                <h1 className="font-alatsi font-[400] text-[32px]">Your Ticket is Booked!</h1>
                <p className="font-roboto text-[16px] font-[400]">Check your email for a copy or you can <span className="font-[700]">download</span></p>
            </div>

            <div className="mt-[5px] w-[66%] p-[20px] bg-transparent bg-cover bg-center h-[600px] bg-no-repeat bg-[url(/ticket.png)]  mx-auto flex items-center flex-col ">
                <div className="rounded-[16px] w-[100%]  border-[#24A0B5]  border-[1px] backdrop-blur-[2px] bg-[rgba(3,_30,_33,_0.10)] ">
                    <div className="flex flex-col items-center justify-center mt-[5px] text-white" >
                        <h1 className="font-rage font-[400] text-[34px]">Techember Fest ”25</h1>
                        <p className="font-roboto text-[10px] font-[400]">📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p className="font-roboto text-[10px] font-[400]">📅 March 15, 2025 | 7:00 PM</p>
                    </div>

                    <div className="w-[140px] h-[140px] mx-auto my-[20px] flex ">
                        <img src={pictureUrl} className="w-[140px] height[140px] border-[#24A0B580] border-[4px] rounded-[12px] " alt="picture" />
                    </div>

                    <div className="w-[90%]  mb-[10px] rounded-[8px] mx-[auto] border-[1px] bg-[#08343C] flex flex-col gap-1 border-[#133D44]">
                        <div className="grid-cols-[50%_50%] grid h-[48px] border-b-[1px] border-[#12464E] justify-between">
                            <div className="flex flex-col border-r-[1px] border-[#12464E] " > 
                                <p className="font-roboto mt-[2px] p-[2px] text-[10px] w-[90%] font-[400] text-[#FFFFFF] opacity-[0.33]">Enter your name</p>
                                <p className="font-roboto mb-[2px] p-[2px] text-[12px] w-[70%] font-[700] text-[#FFFFFF]">{attendeeInfo.name}</p>
                            </div>

                            <div className="flex flex-col items-start justify-center " >
                                <p className="font-roboto mt-[2px] p-[2px] text-[10px] w-[90%] font-[400] text-[#FFFFFF] opacity-[0.33]"> Enter your email *</p>
                                <p className="font-roboto mb-[2px] p-[2px] text-[12px] w-[70%] font-[700] text-[#FFFFFF]">{attendeeInfo.email}</p>
                            </div>
                        </div>

                        <div className="grid-cols-[50%_50%] h-[48px] grid  border-b-[1px] border-[#12464E] justify-between">
                            <div className="flex flex-col  border-r-[1px] border-[#12464E] " >
                                <p className="font-roboto mt-[2px] p-[2px] text-[10px] w-[90%] font-[400] text-[#FFFFFF] opacity-[0.33]" >Ticket Type:</p>
                                <p className="font-roboto mb-[2px] p-[2px] text-[12px] w-[70%] font-[700] text-[#FFFFFF]">{selectedTicket.ticket}</p>
                            </div>

                            <div className="flex flex-col border-r-[1px] border-[#12464E] " >
                                <p className="font-roboto mt-[2px] p-[2px] text-[10px] w-[90%] font-[400] text-[#FFFFFF] opacity-[0.33]">Ticket for :</p>
                                <p className="font-roboto mb-[2px] p-[2px] text-[12px] w-[70%] font-[700] text-[#FFFFFF]">{selectedTicket.quantity}</p>
                            </div>
                        </div>

                        <div className="flex flex-col h-[49px]  " >
                            <p className="font-roboto mt-[2px] p-[2px] text-[10px]  font-[400] text-[#FFFFFF] opacity-[0.33]">Special request?</p>
                            <p className="font-roboto mb-[2px] p-[2px] text-[12px]  font-[700] text-[#FFFFFF]">{selectedTicket.text}</p>
                        </div>
                        </div> 

                </div>

                <img className="mt-[45px]" src="/barcode.png" alt="barcode" />
            </div>

            <div className="mt-[20px] flex items-center justify-center gap-[20px]">
                <button className="w-[50%] h-[48px] bg-[transparent] font-[400] text-[#24A0B5] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px]"> Book Another Ticket</button>
                <button className="w-[50%] h-[48px] bg-[#24A0B5] font-[400] text-[#ffffff] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px]">Download Ticket</button>
            </div>
        </div>
    )
}