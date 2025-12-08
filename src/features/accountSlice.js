import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "demo@example.com",
  password: "1234",
  isAuthenticated: false,
  message: "",
};

const accountSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      if (
        (state.email === action.payload.email &&
          state.password === parseInt(action.payload.password)) ||
        action.payload.password
      ) {
        state.isAuthenticated = true;
        alert("Login Succesful");
        state.message = "Login Succesfull";
      } else {
        state.isAuthenticated = false;
        alert("Incorrect Details");
        state.message = "Invalid Credentials";
      }
    },
  },
});

export const { login } = accountSlice.actions;
export default accountSlice.reducer;
