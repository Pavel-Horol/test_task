import { TbWorld } from "react-icons/tb";
import dude from '../assets/dude.png'
import gift from '../assets/image 1347.png'
const Article = () => {
    return (
        <div className="flex flex-col mb-10 max-[1020px]:items-center ">
            <div className=" z-20 bg-[#4252D1] text-white flex w-36 h-10 text-[14px] justify-center items-center gap-3 mr-1 text-bold rounded-[10px] mb-3">
                <TbWorld size="30px" color="white"/>
                    <span className="text-white text-[16px] font-semibold">Вебинар</span>
            </div>
            <h1 className="text-raspberry leading-none mb-4 text-[72px] font-extrabold max-[1020px]:text-[52px]">FRONT-END</h1>
            <p className="font-semibold text-white text-[22px] relative mb-5">
              <span className="relative z-10 inline-block text-white">
                <span
                    className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-raspberry before:z-[-1] before:rounded-[5px]">
                  С НУЛЯ
                </span>
              </span> легкий старт в IT профессии
            </p>
            <p className="text-[18px] max-w-[420px] text-wrap text-white mb-10 max[1020px]:text-[16px]">Узнайте какими <span className="font-bold max-[1020px]:text-[15px]"> навычками должен обладать фронтенд разработчик в 2022 </span> году и как начать карьеру в востребованной профессии</p>
           <div className="flex flex-col gap-4 max-[1020px]:hidden">
                <div className="flex items-center">
                    <img src={dude} alt="dude" className="w-[57px] h-[57px]"/>
                    <div className="max-w-[310px]">
                        <h3 className="text-white font-bold text-[13px]">КИРИЛЛ <span className="text-[#4252D1] font-bold"> КАСАТОНОВ </span></h3>
                        <p className="text-white text-wrap font-normal text-[12px]">6 лет коммерчиского опыта с такими компаниями как Mercedes-Benz и
                            другими крупными корпорациями</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={gift} alt="dude" className="mr-3 w-[37px] h-[37px]"/>
                    <div className="">
                        <h3 className="text-white font-bold text-[12px]">Бонус за регестрацию</h3>
                        <p className="max-w-[240px] text-white text-wrap font-normal text-[12px] ">PDF-файл "5 приемуществ профессии фронтенд разработчика"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;