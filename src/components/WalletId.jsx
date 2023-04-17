import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { walletType } from "../feaures/walletSlice";

const WalletId = ({ item }) => {
  const wallet = useSelector((state) => state.wallet.wallet);

  const dispatch = useDispatch();
  return (
    <Link
      to="/validate-wallet"
      onClick={() =>
        dispatch(
          walletType({
            title: item.title,
          })
        )
      }
    >
      <div
        className="flex flex-col items-center justify-center
gap-8 m-2 md:h-[150px] md:w-[200px] w-[150px] h-[120px] 
cursor-pointer group 
"
      >
        <img
          src={item.imgurl}
          alt=""
          className="max-w-[50px] rounded-full group-hover:shadow-md transition-all duration-300"
        />
        <h1 className=" text-[15px] font-semibold md:text-[20px] text-white group-hover:text-blue-400 transition-all duration-300">
          {item.title}
        </h1>
      </div>
    </Link>
  );
};

export default WalletId;
