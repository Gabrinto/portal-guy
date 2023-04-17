import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newconnect.jpeg";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { walletType } from "../feaures/walletSlice";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-[2rem] flex flex-col ">
      <div className="mb-[4rem] mt-[4rem]">
        <h1 className="font-bold text-[1.7rem] text-white">JOIN US</h1>
        <p className="text-white text-center mt-4">
          Learn more about this portal, chat with the team, others in the
          community, and have your say in shaping the future of decentralized
          finance.
        </p>
      </div>
      <div className="bg-[#0f0f11]">
        <div
          className="mt-6  p-3 pl-4 flex flex-col 
      md:flex-row items-start gap-8 px-4 justify-around "
        >
          <div className="">
            <img src={logo} alt="" className="w-[37px] mb-3 rounded-full" />
            <span className="text-white text-[1rem] text-left font-[blitz]">
              Speed. Faster than fast, quicker than quick. I am Lightning.
            </span>
          </div>
          <Link
            to="/wallet"
            onClick={() =>
              dispatch(
                walletType({
                  title: "TOKENS",
                })
              )
            }
            className="text-black bg-white rounded-lg py-3 px-6"
          >
            BUY TOKEN
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-600" />

        <div
          className="bg-[#0f0f11] text-white flex flex-col md:flex-row
        px-[2rem] p-4 items-center justify-between"
        >
          <span className="md:w-[40%] text-sm mb-3 font-[blitz] md:text-left">
            <span className="font-bold">Disclaimer:</span> The information
            provided shall not in any way constitute a recommedation as to
            whether you should invest in any product discussed. We accepts no
            liability for any loss occassioned to any person acting or
            refraining from action as a result of any material provided or
            published.
          </span>
          <p className="text-[0.9rem] flex items-start md:items-center">
            <AiOutlineCopyrightCircle />
            All Block Portal 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
