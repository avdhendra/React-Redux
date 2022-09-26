//method to interact with api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//the result get cache and we didnt invalidate the previous cache data so it didnt update the new item
//tag the cache data and let the it know which mutation is invalidate the cahce so it refetch the data
 export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes:['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos" ,providesTags:['Todos'], transformResponse:res=>res.sort((a,b)=>b.id-a.id)}),
      //add the item in 
    addTodo:builder.mutation({
      query:(todo)=>({
        url:'/todos',
        method:"POST",
        body: todo
      }),
      invalidatesTags:['Todos']

    }),
    updateTodo:builder.mutation({
      query:(todo)=>({
        url:`/todos/${todo.id}`,
        method:'PATCH',
        body:todo
      }),
      invalidatesTags:['Todos']
    }),

    deleteTodo:builder.mutation({
      query:({id})=>({
        url:`/todos/${id}`,
        method:'DELETE',
        body:id
      })
      ,invalidatesTags:['Todos']
    })
  }),

  
});
export const { useGetTodosQuery ,useAddTodoMutation,useUpdateTodoMutation,useDeleteTodoMutation} = apiSlice;
