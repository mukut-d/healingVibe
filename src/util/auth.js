import {Platform} from 'react-native';
import AxiosInstance, {baseURL} from '../api/AxiosInstance';

export const setSignup = async token => {
  try {
    const response = await AxiosInstance.post(`${baseURL}/api/signup`, {
      push_token: 'abcx',
      firebase_token: token,
      login_type: Platform.OS,
    }).catch(err => {
      console.log('err in axios post promise-', err);
    });
    // console.log('response from axios post---', response);
    return response;
  } catch (error) {
    console.log('err in catch--', error);
    throw error;
  }
};
