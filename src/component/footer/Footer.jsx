import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="text-white mt-20">
        <div data-aos="fade-down" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
            {/*  */}
            <h1 className="py-10 text-3xl font-bold text-yellow text-center">Contact Us</h1>
            {/* grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                {/* address section */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <IoLocationSharp className="text-5xl  hover:text-lightblue"/>
                    </div>
                    <p>#92, 3rd Main, Virgo Nagar, Post, <br/> seeghnhalli, Bengaluru, Karnataka 560049 </p>
                </div>
                {/* email section */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <MdEmail className="text-5xl  hover:text-lightgreen"/>
                    </div>
                    <div>
                        <p>info@goodfood.com</p>
                        <p>hr@goodfood.com</p>
                    </div>
                </div>

                {/* number section */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <FaPhone className="text-5xl  hover:text-blue"/>
                    </div>
                    <div>
                        <p>94425***** - Sales and Services</p>
                        <p>94425***** - Hiring Queries</p>
                        <p>94425***** - Whatsapp</p>
                    </div>
                </div>
            </div>

            {/* copyright section */}
            <div className="flex justify-between items-center">
                <p>© 2022 TCJ. All rights reserved</p>
                <div className="flex items-center gap-6">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>      
        </div>
    </div>
    </>
  )
}

export default Footer