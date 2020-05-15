import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import TokenStorage from '../util/TokenStorage';

export const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(async function(config) {
  try {
    const token = await TokenStorage.getToken();
    config.headers.authorization = token;
  } catch (error) {
    // window.location.assign(LOGIN_ADDRESS);
  } finally {
    return config;
  }
});

axiosInstance.interceptors.response.use(
  <T>(res: AxiosResponse<T>) => {
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  },
  err => {
    if (!err.response) {
      err.response = {
        data: {},
      };
    }
    let errMsg = err.response.statusText;
    if (typeof err.response.data.message === 'string') {
      errMsg = err.response.data.message;
    }
    throw {
      message: errMsg,
      code: err.response.status,
      data: err.response.data,
    };
  },
);

export const request = {
  async use<T>(config: AxiosRequestConfig) {
    return axiosInstance.request<T>(config).then(data => data.data);
  },

  async get<T>(url: string, config?: AxiosRequestConfig | undefined) {
    return request.use<T>({ method: 'get', url, ...config });
  },
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined,
  ) {
    return request.use<T>({ method: 'post', url, data, ...config });
  },
};
