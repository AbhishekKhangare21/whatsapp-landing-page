import React from "react";
import { BsPaypal, BsTelegram } from "react-icons/bs";
// import Phone from "../assets/images/phone.png";
import telegram from "../assets/images/telegram.png";
// import telejpg from "../assets/images/telejpg.jpg";

const LandingPage = () => {
  return (
    <div className="container m-auto lg:h-screen w-screen">
      <div className="flex h-full mx-8 lg:mx-0 pt-20 flex-col lg:flex-row">
        <div className="flex-1 mt-14">
          <div className="lg:ml-36 text-center lg:text-start mb-8">
            <h1 className=" ml-2 text-4xl text-white ">IPL DON</h1>
            <h1 className=" ml-2 text-7xl text-white ">BOOKIE</h1>
          </div>
          <div className="flex flex-col lg:ml-36  text-white">
            <div className="flex justify-center lg:justify-start">
              <button className="w-40 py-3 px-0 text-sm shadow-sm rounded-full  bg-[#0088cc] hover:bg-[#d39804] flex text-center justify-center">
                <BsTelegram className="inline text-xl mx-2" />
                <h4>Join Now</h4>
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-lg text-white">
            <p className="lg:ml-36 lg:mx-0 md:mx-20">
              <p className="pb-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </p>
              <p className="pb-1">
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia
              </p>
              <p className="pb-1">animi, id est laborum et dolorum fuga.</p>
            </p>
          </div>
        </div>
        <div className="flex-1 ">
          <div className=" w-full h-full align-middle items-center flex justify-center ">
            <img
              src={telegram}
              alt="phoneImg"
              className="w-80 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
