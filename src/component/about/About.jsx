import React from 'react'
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from 'react-icons/fa';

// const BgStyle = {
//   backgroundImage: `url(${BgPolygon})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   width: "100%",
//   height: "100%",
//   position: "relative",
// }
 
const About = ({HandlePopup}) => {
  return (
    <>
    <div className="py-14 bg-cover bg-center bg-no-repeat w-full h-full relative" style={{ backgroundImage: `url(${BgPolygon})` }}>
        <div className="container min-h-[500px] relative z-10">
            <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
                About Us
            </h1>

            {/* card section */}
            <div data-aos="fade" data-aos-delay="300" className="bg-white/80 p-10 my-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt dicta tempore ut soluta aut magni, optio eaque consectetur, porro atque natus minima harum omnis debitis. Itaque vel eius fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi fuga accusantium, veniam vel reiciendis magnam corporis minima placeat sapiente dolorum ipsum aliquid hic autem numquam corrupti soluta consectetur aliquam odio?.
                <div className="pt-10 flex justify-center">
                    <button 
                     onClick={HandlePopup}
                     className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                        <FaUser/>
                        My Account
                    </button>
                </div>
            </div>
        </div>
        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="" className="mx-auto"/>
        </div>
    </div>
    </>
  )
}

export default About