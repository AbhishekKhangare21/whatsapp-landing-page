import React from "react";
import { BsPaypal, BsWhatsapp } from "react-icons/bs";
import Phone from "../assets/images/phone.png";

const LandingPage = () => {
  return (
    <div className="container bg-gray-600 m-auto h-screen">
      <div className="flex h-full mx-8 lg:mx-0 pt-20  flex-col lg:flex-row">
        <div className="flex-1">
          <div className="sm:ml-36 ml-5 mb-12">
            <h1 className=" ml-2 text-4xl text-white ">India / DGTAL</h1>
          </div>
          <div className="flex flex-col ml-36 text-white">
            <button className="w-48 p-3 text-sm  rounded-full  bg-[#1eb11e] hover:bg-[#fdcc52] ">
              <BsWhatsapp className="inline text-xl mx-2" />
              CONTACT US
            </button>
            <button className="w-60 p-3 mt-6 text-sm  rounded-full  bg-[#1eb11e] hover:bg-[#fdcc52]">
              <BsPaypal className="inline text-2xl mr-4 text-[#1f2650]" />
              PAY NOW 999 INR
            </button>
          </div>
          <div className="mt-8 flex flex-col text-lg text-white">
            <p className="ml-36">
              Grow your Business Use WhatsApp Bulk Message Software and connect
              with your customers at any time.
            </p>
            <p className="ml-36">Call Us - +91 80000 16218</p>
            <p className="ml-36">1. This is a 1 Year Charge.</p>
            <p className="ml-36">2. No per Message cost.</p>
            <p className="ml-36">
              3. You can extract Numbers from your Joined Whatsapp Group.
            </p>
            <p className="ml-36">
              4. You can Filter Whatsapp Numbers from Bulk Data.
            </p>
            <p className="ml-36">
              5. You can send Bulk Messages with an individual's name.
            </p>
            <p className="ml-36">
              6. You Can send JPG, Audio, Video, Text etc.
            </p>
            <p className="ml-36">
              7. Send bulk Whatsapp without saving numbers in your Phone Book.
            </p>
            <p className="ml-36">
              8. Join & Post in new Groups on a Single click.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className=" mx-0 h-full align-middle text-center">
            <img
              src={Phone}
              alt="phoneImg"
              className="h-[620px] w-[600px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
