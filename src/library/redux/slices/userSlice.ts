import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isVegMode: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    serReduxUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setReduxVegMode: (state, action: PayloadAction<boolean>) => {
      state.isVegMode = action.payload;
    },
  },
});
export const { serReduxUser, setReduxVegMode } = userSlice.actions;
export default userSlice.reducer;
