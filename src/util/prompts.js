import AxiosInterceptor from '../api';
import {baseURL} from '../api/AxiosInstance';

async function getQuestion() {
  try {
    const response = await AxiosInterceptor.get(
      `${baseURL}/api/questions/list`,
    );

    return response?.data?.payload?.data;
  } catch (error) {
    console.log('error in get quest', error);
    throw error;
  }
}

const logout = async () => {
  try {
    const response = await AxiosInterceptor.post(`${baseURL}/api/logout`).catch(
      err => {
        console.log('err in axios post-', err);
      },
    );

    console.log('res from logout--', response);
    return response;
  } catch (err) {
    console.log('error in post request', err);
  }
};

export function userLogout() {
  return logout();
}

export function receiveQuestion() {
  return getQuestion();
}
