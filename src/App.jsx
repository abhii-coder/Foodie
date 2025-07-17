import React, {useState, useEffect} from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import Banner  from './component/banner/Banner'
import Whychoose from './component/whychoose/Whychoose'
import About from './component/about/About'
import Footer from './component/footer/Footer'
import Popup from './component/popup/Popup'
import AOS from 'aos'
import "aos/dist/aos.css"

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  

  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup}/>
      <Hero/>
      <Banner/>
      <About HandlePopup={HandlePopup}/>
      <Whychoose/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default App