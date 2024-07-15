import logo from '../assets/logo.svg'
import { FaRegCalendar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Header = () => {
    return (
        <div className="w-full flex flex-row justify-between items-center ">
            <div className="max-[1020px]:mr-3">
                <img src={logo} alt="logo"/>
            </div>
            <div className="flex">
                <div className="bg-[#302E5A] text-white flex max-[1020px]:w-28 w-36  h-10  text-[14px] justify-center items-center gap-3 mr-2 text-bold rounded-[10px]">
                    <FaRegCalendar color="white"/>
                    <span>28 Декабря</span>
                </div>
                <div className="bg-[#302E5A] text-white flex max-[1020px]:w-28 w-36 h-10 text-[14px] justify-center items-center gap-3 mr-1 text-bold rounded-[10px]">
                    <CiClock2 size='20px' color="white"/>
                    <span>3.5 часов</span>
                </div>
            </div>


        </div>
    );
};

export default Header;