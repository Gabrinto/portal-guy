import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dummyData } from "../data";
import Connecting from "./Connecting";
import Header from "./Header";
import WalletId from "./WalletId";

const Wallets = () => {
  // const [visible, setVisible] = useState(true);

  const wallet = useSelector((state) => state.wallet.wallet);

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <div>
      <Header path="/" />

      <div
        className="flex flex-col items-center justify-center mt-[6rem] mb-[1rem] 
      lg:max-w-[60vw] lg:mx-auto"
      >
        {wallet.title !== "CONNECT WALLET" && (
          <h1 className="text-[1.5rem]">Connect Wallet</h1>
        )}
        <h1>
          {wallet && (
            <span
              className=" text-transparent md:text-[1.8rem] text-[1.3rem]
               text-center bg-clip-text bg-gradient-to-r 
              from-[#9d59fc] to-[#ff6369] flex justify-center"
            >
              {wallet.title}
            </span>
          )}
        </h1>
        {wallet.title !== "CONNECT WALLET" ? (
          <p className="text-gray-700 mt-4 text-center px-3">
            Select your prefered options, then connect for Bridging, <br />{" "}
            Porting, Migration plus many more Network services & apps
          </p>
        ) : (
          <p className="text-gray-700 mt-4">Select your prefered option</p>
        )}
      </div>

      <div
        className="flex md:gap-5 flex-wrap px-3
      
      items-center justify-center lg:max-w-[60vw] lg:mx-auto
      
      bg-gradient-to-r
      from-[#200422]
      via-[#312c2f]
      to-[#4f3c8c]
      background-animate
      "
      >
        {dummyData.map((item, index) => (
          <WalletId key={index} item={item} />
        ))}
      </div>

      <div className="h-[2px] bg-gray-200 w-full mb-[2rem]" />

      <div className="flex items-center justify-center flex-col">
        <div className="flex gap-4 text-gray-400 mb-3 ">
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <AiOutlineInstagram size={19} />
          </a>
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <SiDiscord size={19} />
          </a>
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <AiOutlineTwitter size={19} />
          </a>
        </div>
        <p className="text-gray-400 mt-3">© 2018 - 2022</p>
      </div>
    </div>
  );
};

export default Wallets;
