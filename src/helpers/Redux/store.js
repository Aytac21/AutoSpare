import { configureStore } from "@reduxjs/toolkit";
import aspareSlicer from "./aspareSlicer";
// import favoritesReducer from "./favoritesSlice";
import searchReducer from './searchSlice';
import aspareReducer from './aspareSlicer';
export const store = configureStore({
  reducer: {
    aspareSlice: aspareSlicer,
    search: searchReducer,
    aspare: aspareReducer,
    // favorites: favoritesReducer,
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware()
});
export default store;
