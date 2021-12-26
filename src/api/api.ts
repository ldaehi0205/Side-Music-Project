import { LoginType, UserInfoType } from '@Types/type';
import axios from 'axios';

axios.defaults.withCredentials = true;

const defaultUrl = 'http://d117-125-178-66-55.ngrok.io';

export const ApiCall = {
  sendUserInfo: (userQuery: UserInfoType) => {
    const url = `${defaultUrl}/add`;
    return axios.post(url, userQuery);
  },

  sendLoginInfo: (userQuery: LoginType) => {
    const url = `${defaultUrl}/login`;
    return axios.post(url, userQuery);
  },
};
