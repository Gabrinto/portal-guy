import React from "react";
import { TeamData } from "../data";
import "./Explore.css";
import { FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="md:mt-[5rem] mt-[3rem]">
      <div>
        <h1 className="text-[2rem] text-white">
          MEET <span className="font-bold">THE</span>TEAM
        </h1>
      </div>
      <div className="flex flex-wrap items-center gap-6 mt-[2rem] justify-center">
        {TeamData.map((item) => {
          const { id, imgurl, name, position, text, twitter, twitterLink } =
            item;
          return (
            <div
              key={id}
              className="w-[330px] py-8 md:w-[450px] md:h-[670px] lg:w-[340px] lg:h-[720px] bg-[#11111a]
                flex flex-col items-center rounded-xl pt-[2rem] "
            >
              <img
                src={imgurl}
                alt={name}
                className="img1 md:w-[230px] w-[200px]
              rounded-full"
              />
              <img
                src={imgurl}
                alt={name}
                className="img2 md:w-[230px] w-[200px]
              rounded-full"
              />

              <h1 className="text-[2.2rem] font-bold text-white mt-[2rem]">
                {name}
              </h1>
              <p
                className=" text-transparent text-[1.3rem] bg-clip-text bg-gradient-to-r
               from-[#9d59fc] to-[#ff6369] mb-4"
              >
                {position}
              </p>
              <p className="text-white p-4">{text}</p>

              {twitter && (
                <a
                  href={twitterLink}
                  className="bg-blue-500 p-2
                flex items-center rounded-full"
                >
                  <FaTwitter size={21} className="text-white" />
                </a>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full mt-4 h-[1px] bg-gray-600" />
    </div>
  );
};

export default Team;
