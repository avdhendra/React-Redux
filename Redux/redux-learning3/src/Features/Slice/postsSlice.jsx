import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});
// const initialState = {
//   posts: [],
//   status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
//   count:0
// };
//state shape
/*
{
    posts:{
        ids:[1,2,3...],
        entities:{
          '1
        }
        
    }
}

*/
const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
  count: 0,
});
//here we dont need the [] it return array by default
//here we have extra things status,error,count on top of array

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
      return response.data;
    } catch (err) {
      //  return err.message;
      //when we update the new create post it actually return the error and we dont want this so we just return the initial state of post
      //never do it else where
      //we can interact with api but we can;t create the post
      return initialPost;
    }
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response?.status === 200) return initialPost;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded: {
    //   reducer(state, action) {
    //     state.posts.push(action.payload);
    //   },
    //   prepare(title, content, userId) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content,
    //         date: new Date().toISOString(),
    //         userId,
    //         reactions: {
    //           thumbsUp: 0,
    //           wow: 0,
    //           heart: 0,
    //           rocket: 0,
    //           love: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    //we not adding post
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      //const existingPost = state.posts.find((post) => post.id === postId);
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount(state, action) {
      state.count = state.count + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            love: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        //state.posts = state.posts.concat(loadedPosts);
        postsAdapter.upsertMany(state, loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id
        // would be not be needed if the fake API
        // returned accurate new post IDs
        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs

        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          love: 0,
        };
        console.log(action.payload);
        //state.posts.push(action.payload);
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could Not Complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        action.payload.date = new Date().toISOString();
        // const posts = state.posts.filter((post) => post.id !== id);
        //state.posts = [...posts, action.payload];
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could Not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        //  const posts = state.posts.filter((post) => post.id !== id);
        //  state.posts = posts;
        postsAdapter.removeOne(state, id);
      });
  },
});

//getSelector create these selector and we rename them with aliases using destructing
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);
//export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

// export const selectPostById = (state, postId) => {
//   return state.posts.posts.find((post) => post.id === postId);
// };
export const selectPostByUser = createSelector(
  [selectAllPosts, (state, userId) => userId], //dependency
  (posts, userId) => posts.filter((post) => post.userId === userId) //when post or userId change it filter
);

export const { increaseCount, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
