import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { exploreData } from "../data";
import { walletType } from "../feaures/walletSlice";
import "./Explore.css";

const Explore = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center mt-[4rem]">
      <div>
        <h1 className="md:text-[3rem] text-[2.5rem] text-white md:mb-6 mb-4">
          Explore
        </h1>
        <p className="text-white w-[90%] text-center mx-auto text-[1.1rem]">
          Below you will find products and services developed and have already
          been released or on which we are currently working on. As time goes
          on, more tiles will appear in this section!.
        </p>
      </div>

      <div className="mt-[3rem] flex gap-12 flex-wrap items-center justify-center">
        {exploreData.map((item) => {
          const { imgurl, title, available, newItem, text, button } = item;
          return (
            <div
              className="w-[340px] md:w-[200px] lg:w-[340px] h-full py-4 flex flex-col items-center pt-[3rem] bg-[#0f0f11] md:h-[620px]
             rounded-3xl px-4"
            >
              <img
                src={imgurl}
                alt="title"
                className="w-[200px] md:w-[100px] lg:w-[140px] img1"
              />
              <img
                src={imgurl}
                alt="title"
                className="w-[200px] md:w-[100px] lg:w-[140px] img2"
              />

              <p
                className="text-[1.6rem] md:text-[1.2rem] lg:text-[2.3rem]
              font-bold text-white mt-4 lg:mt-8"
              >
                {title}
              </p>
              {available && (
                <p
                  className="mt-4 from-[#9d59fc] to-[#ff6369] text-transparent  bg-clip-text bg-gradient-to-r 
                md:text-[1rem] text-[1.4rem]"
                >
                  AVAILABLE
                </p>
              )}
              {newItem && <p className="text-[#ff6369] text-[1.4rem]">NEW</p>}
              <p className="text-white text-[1.1rem] mt-3 md:text-[0.9rem]">
                {text}
              </p>
              {button && (
                <Link
                  to="/wallet"
                  onClick={() => {
                    dispatch(
                      walletType({
                        title: item.to,
                      })
                    );
                  }}
                  className="bg-white rounded-lg mt-4 px-4 py-3 text-sm"
                >
                  {title}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
