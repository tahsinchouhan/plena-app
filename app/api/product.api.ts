import axios, { AxiosError } from 'axios';

type QueryResponse<T> = {
  products: T;
  total: number;
  skip: number;
  limit: number;
};

const API_URL = 'https://dummyjson.com';
export const getAllProducts = async () => {
  try {
    const res = await axios.get<QueryResponse<Product[]>>(
      API_URL + '/products',
    );
    return res?.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message ?? error.message);
    } else {
      throw error;
    }
  }
};
