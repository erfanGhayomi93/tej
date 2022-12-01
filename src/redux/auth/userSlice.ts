import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  id: number | null;
  name: string;
  username: string;
}

const initialState: IUser = {
  id : null , 
  name : "" , 
  username : ""
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsernameAction: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsernameAction } = userSlice.actions;

export default userSlice.reducer;
