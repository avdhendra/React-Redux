import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice";

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
const initialState = postsAdapter.getInitialState();
//here we dont need the [] it return array by default
//here we have extra things status,error,count on top of array

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      //transformResponse is used becuase the db.json doesnt have the date or reaction attach to it
      //we gonna attach the starter data to the json data
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date) {
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          }
          if (!post?.reactions) {
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              love: 0,
            };
          }
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => [
        { type: "Post", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Post", id })),
      ],
    }),
    getPostsByUserId: builder.query({
      query: (id) => `/posts/?userId=${id}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.data) {
            post.data = sub(new Date(), { minutes: min++ }.toISOString());
          }
          if (!post?.reactions) {
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              love: 0,
            };
          }
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [...result.ids.map((id) => ({ type: "Post", id }))];
      },
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: {
          ...initialPost,
          userId: Number(initialPost.userId),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            love: 0,
          },
        },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: `/posts/${initialPost.id}`,
        method: "PUT",
        body: {
          ...initialPost,
          date: new Date().toISOString,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Post",
          id: arg.id,
        },
      ],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, erro, arg) => [
        {
          type: "Post",
          id: arg.id,
        },
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = extendedApiSlice;

//return the query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();
//Create memoized selector
const selectPostsData = createSelector(
  //createSelector receive the function that has an output function
  selectPostsResult,
  (postResult) => selectPostsResult.data //normalized state object with ids & enitites
);

//getSelector create these selector and we rename them with aliases using destructing
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
);

/**
 * ?? if the left element in null then it return the right one
 * */
