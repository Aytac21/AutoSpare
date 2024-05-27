import { createSlice } from "@reduxjs/toolkit";

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../../actions/authAction";

const initialState = {
  user: "",
  isAuthenticated: false,
  error: false,
  errorMessage: "",
  mainURL: "https://ps5dd7f9-7186.euw.devtunnels.ms",
  filter: {},
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
    filterSetter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { authReducer, filterSetter } = aspareSlicer.actions;
export default aspareSlicer.reducer;
