import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  username  : string
}

const initialState: CounterState = {
    username :  ""
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = counterSlice.actions

export default counterSlice.reducer