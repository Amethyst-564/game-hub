import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5d13d16663934cc888b6d34e91b25df8'
  }
})

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }

  post = (data: T) => {
    return axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then(res => res.data)
  }
}