import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/ticketcontext";

export default function Atendee() {
  const {
    attendeeInfo,
    selectedTicket,
    setAttendeeInfo,
    pictureUrl,
    setPictureUrl,
  } = useContext(TicketContext);
  const [error, setErrror]=useState(false)
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    setDragging(true);
  };  

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setPictureUrl(reader.result);
      };
        if (droppedFile) {
            reader.readAsDataURL(droppedFile)


  };
  }


  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPictureUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    const { name, value } = e.target;
    setAttendeeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if(!emailRegex.test(attendeeInfo.email)){
      setErrror(true)
    }
    else{
      setErrror(false)
    }
  }

  const navigate = useNavigate();

  function nextPage() {
    if (!attendeeInfo.name || !attendeeInfo.email || !pictureUrl) {
      return alert("Please fill in all fields");
    } else navigate("/ticket");
  }

  function PrevBtn(){
    navigate("/");
  }

  return (
    <div className="w-[37%] mt-[40px] h-max p-[20px] border-[#0E464F] rounded-[40px] border-[1px] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[90%] max-xs:w-[97%]">
      <div className="flex items-start flex-col justify-center w-[100%] ">
        <div className="flex items-center  justify-between w-[100%]">
          <h1 className="text-[#ffffff] font-jeju font-[400] text-[32px] max-sm:text-[24px]">
            Attendee Details
          </h1>
          <p className="text-[#ffffff] font-jeju font-[400] text-[16px]">
            Step 2/3
          </p>
        </div>
        <div className="w-[100%] h-[4px] bg-[#0E464F] mt-[5px] rounded-[5px]">
          <div className="w-[65%] h-[100%] bg-[#24A0B5]"></div>
        </div>
      </div>

      <div className="w-[100%] mt-[20px] p-[24px] border-[#0E464F] bg-[#08252B] rounded-[32px]">
        <div className="w-[100%] p-[24px] rounded-[24px]  border-[#07373F] border-[1px] flex flex-col item-center justify-center gap-[10px]">
          <p className="font-roboto text-[16px] font-[400] mb-[30px] text-[#FAFAFA]">
            Upload Profile Photo
          </p>
          <div className="h-[200px] mt-[20px] w-[100%] mb-[30px] bg-[rgba(0,_0,_0,_0.20)] flex-col items-center justify-center ">
            <div 
            onDragOver={handleDrag}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="flex w-[240px] flex-col items-center justify-center bg-[#0E464F] rounded-[32px] relative bottom-[28px] h-[256px] mb-[25px] mx-[auto] border-[rgba(36,_160,_181,_0.50)]">
              {!pictureUrl && <img src="/cloud.png" alt="cloud" />}
              {pictureUrl && (
                <img
                  className=" w-[240px] h-[270px] rounded-[32px]"
                  src={pictureUrl}
                  alt="picture"
                />
              )}
              <input
                onChange={handleFile}
                type="file"
                className="opacity w-[100%] absolute h-[100%] opacity-0 "
                name="img"
                id="pic"
                accept="image/png, image/jpeg"
              />
              {!pictureUrl && (
                <label className="text-center relative font-roboto text-[16px] font-[400] text-[#FAFAFA] w-[80%]">
                  Drag & drop or click to upload
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="mt-[20px] bg-[#07373F] h-[4px] "></div>
        <div className="mt-[20px] flex flex-col gap-[10px] text-[#FAFAFA]">
          <div className="flex flex-col gap-[10px]">
            <label
              className="font-roboto text-[16px] font-[400]"
              htmlFor="name"
            >
              Enter your name
            </label>
            <input
              className="h-[48px] w-[100%] rounded-[12px] outline-none p-5 border-[#07373F] border-[1px] "
              type="text"
              name="name"
              id="nme"
              onChange={handleChange}
              value={attendeeInfo.name}
              required
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className="font-roboto text-[16px] font-[400]"
              htmlFor="email"
            >
              Enter your email *
            </label>
           <div className="flex items-center h-[48px] w-[100%] gap-1 p-5 border-[#07373F] rounded-[12px] border-[1px]  ">
            {!attendeeInfo.email && <img src="/icon.png" alt="mail " />}
            <input
              className="h-[40px] w-[100%] outline-none"
              type="email"
              name="email"
              id="mail"
              value={attendeeInfo.email}
              onChange={handleChange}
              placeholder="hello@avioflagos.io"
              required
            />
           </div>
            {error && <p className=" text-[12px] font-roboto font-[400] text-[#FF0000]">Please enter a valid email</p>}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              className="font-roboto text-[16px] font-[400]"
              htmlFor="text"
            >
              Special request?
            </label>
            <textarea
              className="h-[127px] resize-none w-[100%] rounded-[12px] outline-none p-5 border-[#07373F] border-[1px] "
              name="text"
              id="gext"
              maxLength="100"
              placeholder="Textarea"
              required
              value={attendeeInfo.tex}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-[20px] flex items-center justify-center gap-[20px]  max-sm:flex-col">
            <button onClick={PrevBtn} className="w-[50%] cursor-pointer h-[38px] bg-[transparent] font-[400] text-[#24A0B5] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px] max-sm:w-[100%]">
              Back
            </button>
            <button
              onClick={nextPage}
              className="w-[50%] cursor-pointer h-[38px] bg-[#24A0B5] font-[400] text-[#ffffff] text-[16px] outline-none border-[1px] border-[#24A0B5] rounded-[8px] max-sm:w-[100%]"
            >
              Get My {selectedTicket.ticket} Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
