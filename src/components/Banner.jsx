import React from "react";
import { images } from "../constants";
import { dummyData } from "../data";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="text-white mt-[8rem]">
      <div className="px-3 flex items-center justify-center ">
        {/* <div className="lg:text-[14rem] text-[4rem] md:text-[6rem] p-0 leading-none font-bold">
          ALL-IN-1 <br /> <span className="md:ml-[11rem] ml-12">PORTAL</span>{" "}
          <br /> <span className="md:ml-[6rem]">FOR ALL</span> <br />{" "}
          <span className="md:ml-[20rem] ml-24">RPC</span>{" "}
        </div> */}

        <img
          src={images.banner}
          alt=""
          className="w-full lg:w-[70vw] md:w-[86vw]"
        />
      </div>

      <div className=" md:mt-[4rem] text-[2rem] p-3 gap-8 flex flex-col items-center justify-center md:max-w-[70vw] max-w-[100vw]  mx-auto">
        <p className="text-[1.2rem] mt-3">
          This is a WEB3 collective dedicated to developing cross-chain tools,
          services, and products that make basic crypto activities such as, but
          not limited to, participating in presales, exchanging tokens,
          bridging, as simple as possible and without unnecessary complexity.
        </p>
        <p className="text-[1.2rem] md:text-[2rem]">
          Our ultimate goal is to create a one-stop shop where users can
          conveniently compile all of their tasks in one site while paying the
          least fees possible.
        </p>

        <div className="w-full h-[1px] bg-gray-600" />
      </div>

      <div className="text-left mt-4">
        <h1 className="md:text-[2rem] ml-4 text-[1.3rem] text-white uppercase font-bold">
          We're supported by <br />
          over 180 wallets
        </h1>

        <div className="styles_ticker__ps147 mt-[1.4rem]">
          <div className="styles_content__dZufc styles_slideToLeft__skudD gap-10">
            {dummyData.map((item) => (
              <img src={item.imgurl} alt="" className="w-[80px] rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
