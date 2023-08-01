import React from "react";
import { BsPaypal, BsWhatsapp } from "react-icons/bs";
import Phone from "../assets/images/phone.png";

const LandingPage = () => {
  return (
    <div className="container m-auto lg:h-screen w-screen">
      <div className="flex h-full mx-8 lg:mx-0 sm:pt-10  flex-col lg:flex-row">
        <div className="flex-1 mt-14">
          <div className="lg:ml-36 text-center lg:text-start mb-8">
            <h1 className=" ml-2 text-4xl text-white ">VIKASH</h1>
            <h1 className=" ml-2 text-7xl text-white ">BOOKIE</h1>
          </div>
          <div className="flex flex-col lg:ml-36  text-white">
            <div className="flex justify-center lg:justify-start">
              <button className="w-48 py-3 px-0 text-sm shadow-sm rounded-full  bg-[#1eb11e] hover:bg-[#d39804] ">
                <BsWhatsapp className="inline text-xl mx-2" />
                CONTACT US
              </button>
            </div>
            {/* <div className="flex justify-center lg:justify-start">
              <button className="w-60  py-3 px-0 mt-6 text-sm  shadow-sm rounded-full  bg-[#1eb11e] hover:bg-[#ce960a]">
                <BsPaypal className="inline text-2xl mr-4 text-[#1f2650]" />
                PAY NOW 999 INR
              </button>
            </div> */}
          </div>
          <div className="mt-8 flex flex-col text-lg text-white">
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className=" align-middle text-center">
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
