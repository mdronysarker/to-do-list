import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loggedIn: null,
};

export const userSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.loggedIn = action.payload;
      state.users.push(action.payload); // add the new user to the users array
    },
  },
});

export const { LoginUser } = userSlice.actions;
export default userSlice.reducer;
