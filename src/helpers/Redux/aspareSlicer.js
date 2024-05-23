import { createSlice } from "@reduxjs/toolkit";

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../../actions/authAction";

const initialState = {
  user: "",
  isAuthenticated: false,
  error: false,
  errorMessage: "",
  mainURL: "https://xchq1l6f-7186.euw.devtunnels.ms",
  // basketItemIds:{}
};

export const aspareSlicer = createSlice({
  name: "aspareSlice",
  initialState,
  reducers: {
    authReducer: (state, action) => {
      switch (action.type) {
        case LOGIN_SUCCESS:
          (state.user = action.user),
            (state.isAuthenticated = true),
            (state.error = false),
            (state.errorMessage = "");
          break;
        case LOGIN_ERROR:
          (state.user = ""),
            (state.isAuthenticated = false),
            (state.error = true),
            (state.errorMessage = action.error);
          break;
        case LOGOUT:
          state.user = "";
          break;
        default:
          break;
      }
    },
  },
});

export const { authReducer } = aspareSlicer.actions;
export default aspareSlicer.reducer;
