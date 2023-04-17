import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/newconnect.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { walletType } from "../feaures/walletSlice";

const Header = ({ path }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
  // function handleClick(item) {
  //   // setOpen(!open);

  //   // dispatch(
  //   //   walletType({
  //   //     title: item.title,
  //   //   })
  //   // );
  // }

  return (
    <div className="w-full p-3 bg-black shadow-lg fixed top-0 z-50">
      <div className="flex px-4 items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-[40px] cursor-pointer rounded-full"
          />
        </Link>
        {/* <span className="px-5 py-2 bg-[#2d7adf] rounded-2xl text-white font-bold">
          <Link to={path}>Go back</Link>
        </span> */}

        <FaBars
          size={25}
          onClick={() => setOpen(!open)}
          className="text-white ml-3 cursor-pointer lg:hidden"
        />

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

        {/* for desktop links */}

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
                className="text-white   hover:text-transparent hover:bg-clip-text
                hover:bg-gradient-to-r
               hover:from-[#9d59fc] hover:to-[#ff6369]
               transition-all duration-150"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
