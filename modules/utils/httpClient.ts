import axios from 'axios';
import * as convertKeys from 'convert-keys';

const axiosInstance = axios.create();

// NOTE: リクエスト時のmiddleware
axiosInstance.interceptors.request.use((config) => {
  // TODO: アクセストークンを保存する場所が確定次第書き換える
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }

  return config;
});

// NOTE: レスポンス時のmiddleware
axiosInstance.interceptors.response.use((res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  res.data = convertKeys.toCamel(res.data);
  return res;
});

export { axiosInstance as httpClient };
