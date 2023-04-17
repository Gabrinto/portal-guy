import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallet: null,
  },
  reducers: {
    walletType: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { walletType } = walletSlice.actions;

export default walletSlice.reducer;
// const count = useSelector((state) => state.wallet.wallet);
