export default function Header(){
    return(
        <header className="w-[80%]  mt-6 font-jeju flex items-center justify-between h-[52px] p-[18px] border-s-[#197686] box-border rounded-[24px] bg-[rgba(5,_37,_44,_0.40)] max-lg:w-[90%] max-md:w-[95%] max-sm:rounded-[12px] ">
            <img src="/ticz.png" alt="logo" />

            <nav className="max-sm:hidden">
                <ul className="flex items-center justify-center gap-[28px]">
                    <li className="list-none"><a className=" text-[#B3B3B3] text-[18px] font-[400] font-[JejuMyeongjo] no-underline" href="#">Events</a></li>
                    <li className="list-none"><a className=" text-[#B3B3B3] text-[18px] font-[400] font-[JejuMyeongjo] no-underline" href="#">My Tickets</a></li>
                    <li className="list-none"><a className=" text-[#B3B3B3] text-[18px] font-[400] font-[JejuMyeongjo] no-underline" href="#">About Project</a></li>
                </ul>
            </nav>

            <button className="w-[151px] my-[16px] cursor-pointer h-[40px] border-[1px] rounded-[12px] border-[rgba(213,_234,_0,_0.10)] outline-none text-[#0A0C11] text-[16px] font-[400] font-jeju bg-[white] flex items-center justify-center gap-2  ">MY TICKETS <img src="/arrow.png" alt="arrow" /></button>
        </header>
    )
}