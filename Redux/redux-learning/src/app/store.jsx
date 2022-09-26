import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../Features/Slice/counterSlice";
import postsReducer from '../Features/Slice/postsSlice'
import userReducer from '../Features/Slice/userSlice'
export const store = configureStore({
  reducer: {
    //counter: counterReducer
    posts:postsReducer,
    users:userReducer
  },
});

//every thing that is async store outside the store
