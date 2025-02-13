import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/ticketcontext";

export default function Ticket() {
  const { ticketTypes, handleChange, selectedTicket } =
    useContext(TicketContext);
  const navigate = useNavigate();
  function nextBtn() {
    navigate("/attendee");
  }
  return (
    <div className="w-[37%] mt-[40px] h-max p-[20px] border-[#0E464F] rounded-[40px] border-[1px] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[90%] max-xs:w-[97%]">
      <div className="flex items-start flex-col justify-center w-[100%] ">
        <div className="flex items-center  justify-between w-[100%]">
          <h1 className="text-[#ffffff] font-jeju font-[400] text-[32px]">
            Ticket Selection
          </h1>
          <p className="text-[#ffffff] font-jeju font-[400] text-[16px]">
            Step 1/3
          </p>
        </div>
        <div className="w-[100%] h-[4px] bg-[#0E464F] mt-[5px] rounded-[5px]">
          <div className="w-[33%] h-[100%] bg-[#24A0B5]"></div>
        </div>
      </div>

      <div className="w-[100%] mt-[20px] p-[24px] border-[#0E464F] bg-[#08252B] text-[#ffffff]  rounded-[32px]">
        <div className="w-[100%] p-[24px] rounded-[24px]  text-center border-x-[#07373F] border-b-[#07373F] border-x-[2px] border-b-[2px] flex flex-col item-center justify-center gap-[10px] text-[#ffffff]">
          <h1 className="text-[62px] font-rage font-[400] max-sm:text-[32px]">
            Techember Fest ”25
          </h1>
          <p className="font-roboto text-[16px] w-[90%] font-[400] max-sm:text-[12px]">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <p className="font-roboto text-[16px] w-[90%] font-[400]">
            📍 [Event Location] | | March 15, 2025 | 7:00 PM
          </p>
        </div>
        <div className="mt-[20px] bg-[#07373F] h-[4px] "></div>

        <p className="mt-[20px] font-roboto text-[16px] font-[400]">
          Select Ticket Type:
        </p>
        <div className="mt-[10px] flex gap-2 justify-between max-sm:flex-col max-sm:gap-3">
          {ticketTypes.map((ticket) => (
            <label key={ticket.id} htmlFor="ticket" className="relative ">
              <input
                type="radio"
                name="ticket"
                id="ticket"
                value={ticket.type}
                checked={selectedTicket.ticket === ticket.type}
                onChange={handleChange}
                className="absolute w-[100%] h-[100%] opacity-0 cursor-pointer"
              />
              <span
                className={` inline-block px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 border-[1px] border-[#197686] max-sm:w-[100%] ${
                  selectedTicket.ticket === ticket.type
                    ? "bg-[#12464E]  "
                    : "bg-transparent"
                }`}
              >
                <p className="font-roboto font-[600] mb-[10px] text-[24px] ">
                  {ticket.price}
                </p>
                <p className="font-roboto fonnt-[400] text-[16px]">
                  {ticket.name}
                </p>
                <p className="font-roboto fonnt-[400] text-[14px]">
                  {ticket.time}
                </p>
              </span>
            </label>
          ))}
        </div>

        <div className="mt-[20px] flex flex-col gap-[10px]">
          <label htmlFor="ticket">Number of Tickets</label>
          <select
            value={selectedTicket.quantity}
            name="quantity"
            onChange={handleChange}
            className="rounded-[12px] h-[34px] border-[#07373F] border-[1px] outline-none bg-[transparent]"
            id="ticket"
          >
            <option className="bg-[#02191D]" value="1">
              1
            </option>
            <option className="bg-[#02191D] " value="2">
              2
            </option>
            <option className="bg-[#02191D] " value="3">
              3
            </option>
            <option className="bg-[#02191D] " value="4">
              4
            </option>
            <option className="bg-[#02191D] " value="5">
              5
            </option>
            <option className="bg-[#02191D] " value="6">
              6
            </option>
            <option className="bg-[#02191D] " value="7">
              7
            </option>
          </select>
        </div>
      </div>

      <div className="mt-[20px] flex items-center justify-center gap-[20px]  max-sm:flex-col">
        <button className="w-[40%] cursor-not-allowed h-[48px] bg-[transparent] font-[400] text-[#24A0B5] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px] max-sm:w-[100%]">
          Cancel
        </button>
        <button
          onClick={nextBtn}
          className="w-[40%] cursor-pointer h-[48px] bg-[#24A0B5] font-[400] text-[#ffffff] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px] max-sm:w-[100%]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
