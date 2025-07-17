import React from 'react';
import { FaCaretDown, FaUser } from "react-icons/fa";


const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];



function Navbar({HandlePopup}) {
  return (
    <div data-aos="fade" className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">

        {/* Logo section */}
        <div className="font-bold hover:text-primary text-3xl text-transparent" style={{ WebkitTextStroke: '1px #000' }}>
          Foodie
        </div>
        <div>
          {/* Navlinks section */}
        <ul className="flex items-center gap-10">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href="#" className="hidden sm:inline-block hover:text-primary text-xl font-semibold">
                {name}
              </a>
            </li>
          ))}
          

          {/* login section */}
          <li>
            <button 
            onClick={HandlePopup}
             className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300">
              <FaUser/>
              My Account
            </button>
          </li>
        </ul>
        </div> 
      </div>
    </div>
  );
}

export default Navbar;
