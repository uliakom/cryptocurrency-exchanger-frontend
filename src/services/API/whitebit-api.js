import instance from 'shared/api/auth';

export const getCryptoData = async ({ perPage }) => {
  try {
    const response = await instance.get(`/api/ticker?page=1&perPage=${perPage}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getMostPopular = async () => {
  try {
    const response = await instance.get(`/api/ticker?page=1&perPage=50`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
