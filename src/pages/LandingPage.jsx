import React from "react";
import { BsPaypal, BsWhatsapp } from "react-icons/bs";
import Phone from "../assets/images/phone.png";

const LandingPage = () => {
  return (
    <div className="container m-auto lg:h-screen w-screen">
      <div className="flex h-full mx-8 lg:mx-0 pt-20  flex-col lg:flex-row">
        <div className="flex-1">
          <div className="lg:ml-36 text-center lg:text-start mb-12">
            <h1 className=" ml-2 text-4xl text-white ">India / DGTAL</h1>
          </div>
          <div className="flex flex-col lg:ml-36  text-white">
            <div className="flex justify-center lg:justify-start">
              <button className="w-48   p-3 text-sm shadow-sm rounded-full  bg-[#1eb11e] hover:bg-[#fdcc52] ">
                <BsWhatsapp className="inline text-xl mx-2" />
                CONTACT US
              </button>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="w-60  p-3 mt-6 text-sm  shadow-sm rounded-full  bg-[#1eb11e] hover:bg-[#fdcc52]">
                <BsPaypal className="inline text-2xl mr-4 text-[#1f2650]" />
                PAY NOW 999 INR
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-lg text-white">
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              Grow your Business Use WhatsApp Bulk Message Software and connect
              with your customers at any time.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              Call Us - +91 80000 16218
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              1. This is a 1 Year Charge.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">2. No per Message cost.</p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              3. You can extract Numbers from your Joined Whatsapp Group.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              4. You can Filter Whatsapp Numbers from Bulk Data.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              5. You can send Bulk Messages with an individual's name.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              6. You Can send JPG, Audio, Video, Text etc.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              7. Send bulk Whatsapp without saving numbers in your Phone Book.
            </p>
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              8. Join & Post in new Groups on a Single click.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className=" w-full h-full align-middle text-center">
            <img
              src={Phone}
              alt="phoneImg"
              // className="h-[620px] w-[600px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
