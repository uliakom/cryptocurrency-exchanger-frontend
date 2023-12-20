import { createApi } from '@reduxjs/toolkit/query/react';
import instance from 'shared/api/auth';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: async (args, api, extraOptions) => {
    const { url, method, body } = args;

    try {
      const result = await instance(
        {
          url,
          method,
          data: body,
        },
        extraOptions
      );

      return { data: result.data };
    } catch (error) {
      return { error };
    }
  },
  tagTypes: ['News'],
  endpoints: build => ({
    getAllNews: build.query({
      query: page => ({
        url: `/api/news?page=${page}&limit=20`,
        method: 'GET',
      }),
      providesTags: ['News'],
    }),
    getNewsById: build.query({
      query: newsId => ({
        url: `/api/news/${newsId}`,
        method: 'GET',
      }),
      providesTags: ['News'],
    }),
    addNews: build.mutation({
      query: data => ({
        url: '/api/news',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['News'],
    }),
    updateNews: build.mutation({
      query: ({ newsId, data }) => ({
        url: `/api/news/${newsId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['News'],
    }),
    deleteNews: build.mutation({
      query: newsId => ({
        url: `/api/news/${newsId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['News'],
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
  useAddNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;
