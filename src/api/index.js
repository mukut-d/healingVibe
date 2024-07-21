import auth from '@react-native-firebase/auth';
import store from '../store/store';
import AxiosInterceptor from './AxiosInstance';

AxiosInterceptor.interceptors.request.use(res => {
  const token = store.getState().auth.token;

  console.log(token);

  res.headers['Authorization'] = `Bearer ${token}`;

  console.log('Response was received');

  return res;
});

AxiosInterceptor.interceptors.response.use(
  res => {
    console.log('Response was received');

    return res;
  },
  error => {
    if (error.response) {
      console.error('Server Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

// implementing jwt  validation --

export const validateUserJWTToken = async data => {
  console.log('data from form--', data);

  try {
    if (auth().currentUser) {
      auth().signOut();
    }
    // auth rn firebase
    await auth()
      .signInWithEmailAndPassword('karan.silversky+2w@gmail.com', '123456')
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    const tokenId = await auth().currentUser.getIdToken();

    return tokenId;
  } catch (err) {
    console.log('err from jwt--', err);
    return null;
  }
};

export default AxiosInterceptor;
