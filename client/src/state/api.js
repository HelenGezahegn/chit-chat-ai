import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// creating a section of the store in redux
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (build) => ({
    postAIText: build.mutation({
      query: (payload) => ({
        url: "openai/v1/completions",
        method: "POST",
        body: payload
      })
    }),
    postAICompleteText: build.mutation({
      query: (payload) => ({
        url: "openai/assist",
        method: "POST",
        body: payload
      })
    })
  })
});

export const { usePostAITextMutation, usePostAICompleteTextMutation } = api;
