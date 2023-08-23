import type { AxiosInstance } from 'axios';
import axios from 'axios';

type AxiosInstanceReturn = ReturnType<typeof axios.create>;

const BASE_URL =
  process.env.REACT_APP_ENV === 'development'
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL_PROD;

export const publicRequest: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const userReq = (tkn: string): AxiosInstanceReturn =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${tkn}`,
    },
  });
