import html_image from './assets/HTML5_logo_and_wordmark.png'
import css3_image from './assets/CSS3_logo_and_wordmark.png'
import js_image from './assets/javascript.png'
import sublime_image from './assets/sublime-text 1.png'
import visualstudio_image from './assets/Visual_Studio_Code_1.35_icon.png'
import Header from "./components/Header.tsx";
import Form from "./components/Form.tsx";
import Article from "./components/Article.tsx";
import dude from "./assets/dude.png";
import gift from "./assets/image 1347.png";

function App() {

  return (
    <>
        <div className="bg-primary-bg w-full h-screen overflow-hidden relative max-[1020px]:overflow-y-scroll">
            <div className="circle size-[400px] translate-x-[-30%] translate-y-[-20%]"/>
            <div className="circle size-[800px] left-[100vw] translate-x-[-60%] translate-y-[-25%]"/>
            <h1 className="text-stroke w-full absolute bottom-0 leading-none max-[1020px]:hidden text-center">FRONT-END DEVELOPER</h1>
            <div className="absolute z-10 right-0 top-1/2 translate-y-[-50%] max-[1020px]:hidden">
                <img src={html_image} alt="html icon" className="w-[88px] block translate-x-[-10%] before:content-[''] before:block before:absolute before:rounded-[50%] before:mr-12 before:size-10"/>
                <img src={css3_image} alt="css icon" className="w-[60px] translate-x-[-80%]  "/>
                <img src={js_image} alt="js icon" className="w-[61px] translate-x-[-5%]"/>
                <img src={sublime_image} alt="sublime icon" className="w-[54px] translate-x-[-80%]"/>
                <img src={visualstudio_image} alt="visualstudio icon" className="w-[60px] translate-x-[-10%]"/>
            </div>
            <div className="container relative z-50 w-4/5 mx-auto mt-4 ">
                <Header/>
                <div className="w-full z-20 flex flex-row justify-between mt-20 flex-wrap max-[1020px]:justify-center max-[1020px]:flex-col max-[1020px]:items-center">
                    <Article/>
                    <Form/>
                    <div className="flex mb-4 flex-col gap-4 min-[1020px]:hidden">
                        <div className="flex items-center">
                            <img src={dude} alt="dude" className="w-[57px] h-[57px]"/>
                            <div className="max-w-[310px]">
                                <h3 className="text-white font-bold text-[13px]">КИРИЛЛ <span
                                    className="text-[#4252D1] font-bold"> КАСАТОНОВ </span></h3>
                                <p className="text-white text-wrap font-normal text-[12px]">6 лет коммерчиского опыта с
                                    такими компаниями как Mercedes-Benz и
                                    другими крупными корпорациями</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src={gift} alt="dude" className="mr-3 w-[37px] h-[37px]"/>
                            <div className="">
                                <h3 className="text-white font-bold text-[12px]">Бонус за регестрацию</h3>
                                <p className="max-w-[240px] text-white text-wrap font-normal text-[12px] ">PDF-файл "5
                                    приемуществ профессии фронтенд разработчика"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
