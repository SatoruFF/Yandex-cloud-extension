import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: (limit: number = 100) => ({
        url: "/users",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    createUser: build.mutation({
      query: (post) => ({
        url: "/users",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updateUser: build.mutation({
      query: (post) => ({
        url: `/users/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteUser: build.mutation({
      query: (post) => ({
        url: `/users/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
