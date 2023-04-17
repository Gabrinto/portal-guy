import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newconnect.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HomeScreen.css";
import Banner from "./Banner";
import Explore from "./Explore";
import Team from "./Team";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { walletType } from "../feaures/walletSlice";

const NavData = [
  {
    id: 1,
    to: "/",
    name: "Home",
    title: "Home",
  },

  {
    id: 2,
    to: "/wallet",
    name: "Token",
    title: "Tokens",
  },
  {
    id: 3,
    to: "/wallet",
    name: "Staking",
    title: "Trade > Stake",
  },
  {
    id: 4,
    to: "/wallet",
    name: " Exchange",
    title: "Exchange",
  },
  {
    id: 5,
    to: "/wallet",
    name: "Airdrops | NFT | Rewards",
    title: "Airdrops . NFT . (Create, Buy/Sell). Rewards (Claim)",
  },
  {
    id: 6,
    to: "/wallet",
    name: "Networks | Migration",
    title: "Networks",
  },
];
const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="py-3 
  
    bg-gradient-to-r
    from-[#200422]
    via-[#24181f]
    to-[#0e0b1b]
    background-animate"
    >
      <div
        className="text-[6rem] flex justify-between items-center h-[70px] bg-black
      top-0 fixed right-0 left-0 px-12 z-20"
      >
        <Link to="/">
          <img
            src={logo}
            alt=""
            className=" rounded-full md:w-[3rem] w-[2rem]"
          />
        </Link>
        <div className=" gap-8 items-center text-[20px] hidden lg:flex">
          {NavData.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => {
                  dispatch(
                    walletType({
                      title: item.title,
                    })
                  );
                  setOpen(false);
                }}
                className="text-white  hover:text-transparent hover:bg-clip-text
                hover:bg-gradient-to-r
               hover:from-[#9d59fc] hover:to-[#ff6369]
               transition-all duration-150"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center">
          <Link
            to="/wallet"
            onClick={() =>
              dispatch(
                walletType({
                  title: "CONNECT WALLET",
                })
              )
            }
            className="md:text-[16px] text-sm bg-gradient-to-r from-[#9d59fc] via-[#ff50cd] to-[#ff6369]
            md:p-2 p-1 rounded-full text-white"
          >
            Connect wallet
          </Link>

          <FaBars
            size={27}
            className="text-white ml-3 cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div
          className={`flex  ${
            open ? "md:w-[500px] w-[270px]" : "w-[0px] hidden"
          } 
           flex-col items-start p-5 absolute transition-all duration-700 delay-150
        top-0 right-0 pt-[4rem]  h-screen bg-gradient-to-br  from-[#200422]
        via-[#312c2f]
        to-[#4f3c8c] z-50 gap-6 ease-in-out`}
        >
          <FaTimes
            className="text-white flex
          absolute right-[4rem] top-[4rem] text-right  cursor-pointer"
            size={28}
            onClick={() => setOpen(!open)}
          />

          {NavData.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => {
                  dispatch(
                    walletType({
                      title: item.title,
                    })
                  );
                  setOpen(false);
                }}
                className="text-white md:text-[2.3rem] text-[1.2rem]
                
                hover:text-transparent hover:bg-clip-text
                 hover:bg-gradient-to-r
                hover:from-[#9d59fc] hover:to-[#ff6369]
                transition-all duration-150
                
                "
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <Banner />
      <Explore />
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
