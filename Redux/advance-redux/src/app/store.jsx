import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/api/apiSlice";
//import counterReducer from "../Features/Slice/counterSlice";
// import postsReducer from '../Features/Slice/postsSlice'
import userReducer from '../Features/Slice/userSlice'

export const store = configureStore({
  reducer: {
    //counter: counterReducer
    // posts:postsReducer,
    users:userReducer,
    //dymamically the reducerpath
[apiSlice.reducerPath]:apiSlice.reducer,


  },
  middleware:getDefaultMiddleware=> getDefaultMiddleware.concat(apiSlice.middleware)
});

//every thing that is async store outside the store
