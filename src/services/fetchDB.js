import instance from 'shared/api/auth';

// reviews
export const getAllReviews = async params => {
  try {
    const response = await instance.get(`/api/review`, { params });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

// admin access
export const updateReviewStatus = async (reviewId, status) => {
  try {
    const response = await instance.patch(`/api/review/${reviewId}`, { status });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

// transactions
export const getAllTransactions = async params => {
  try {
    const response = await instance.get(`/api/transactions`, { params });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};

export const updateTransactionStatus = async (id, status) => {
  try {
    const response = await instance.patch(`/api/transactions/${id}`, { status });

    return response.data;
  } catch (err) {
    console.log(err.response?.data?.message);
  }
};
