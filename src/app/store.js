import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "../feaures/walletSlice";

export default configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
