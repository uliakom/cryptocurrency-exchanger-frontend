import { createApi } from '@reduxjs/toolkit/query/react';
import instance from 'shared/api/auth';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
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
  tagTypes: ['Reviews'],
  endpoints: build => ({
    getAllReviews: build.query({
      query: page => ({
        url: `/api/review?page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getApprovedReviews: build.query({
      query: page => ({
        url: `/api/review/approved?limit=6&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getUserReviews: build.query({
      query: userId => ({
        url: `/api/owner/${userId}`,
      }),
      providesTags: ['Reviews'],
    }),
    getReviewById: build.query({
      query: reviewid => ({
        url: `/api/review/${reviewid}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getMyReview: build.query({
      query: () => ({
        url: '/api/review/my',
        method: 'GET',
      }),
    }),

    addReview: build.mutation({
      query: data => ({
        url: `/api/review/my`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reviews'],
    }),

    deleteReview: build.mutation({
      query: reviewId => ({
        url: `/api/review/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useAddReviewMutation,
  useGetReviewByIdQuery,
  useDeleteReviewMutation,
  useGetApprovedReviewsQuery,
  useGetUserReviewsQuery,
  useGetMyReviewQuery,
} = reviewsApi;
