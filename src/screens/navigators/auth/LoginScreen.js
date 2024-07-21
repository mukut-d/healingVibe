import {memo, useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FORMFIELDS} from '../../../util/data';
import {images} from '../../../constants/images';
import {colors} from '../../../constants/colors';
import Button from '../../../components/ui/Button';
import Form from '../../../components/ui/Form';
import BottomSheetComponent from '../../../components/ui/BottomSheetComponent';
import {validateUserJWTToken} from '../../../api';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken, setToken} from '../../../store/auth';
import {setSignup} from '../../../util/auth';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const LoginScreen = () => {
  const [formfields, setFormfields] = useState([...FORMFIELDS]);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const bottomSheetRef = useRef(null);
  StatusBar.setBarStyle('dark-content');

  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
  }

  const close = useCallback(() => {
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.close();
    }
    setIsOpen(false);
  }, []);

  const show = useCallback(() => {
    if (bottomSheetRef?.current) {
      bottomSheetRef.current.expand();
    }
    setIsOpen(true);
  }, []);

  const onPress = mode => {
    // console.log('mode', mode);

    setFormfields(prev => {
      if (mode === 'signup') {
        // console.log(true);
        return [...FORMFIELDS.slice(0, 3)];
      }
      const updated = FORMFIELDS.filter(
        item => item.name === 'email' || item.name === 'password',
      );
      // console.log('updated array--', updated.length);
      return [...updated];
    });
  };
  const loginHandler = async data => {
    dispatch(clearToken());
    const token = await validateUserJWTToken(data);

    const response = await setSignup(token);

    if (response.data.payload.access_token) {
      dispatch(setToken(response.data.payload.access_token));
    }
  };

  return (
    <View
      style={[
        styles.root,
        isOpen
          ? {backgroundColor: 'rgba(242, 235, 236, 0.825)'}
          : {backgroundColor: colors.red100},
      ]}>
      <ImageBackground source={images.loginbg} style={styles.root}>
        {/* <Text
          style={{fontSize: 20, color: colors.black100}}
          onPress={handleAuth}>
          Go to auth page
        </Text> */}
        <Text style={styles.welcome}>Welcome to Healing Vibe!</Text>
        <View style={styles.form}>
          <View style={styles.tab}>
            <Button
              onPress={() => {
                onPress('login');
              }}
              mode={formfields?.length === 3 ? 'light' : 'dark'}
              additionalStyles={styles.additionalStyles}>
              Log In
            </Button>
            <Button
              mode={formfields?.length !== 3 ? 'light' : 'dark'}
              onPress={() => {
                onPress('signup');
              }}
              additionalStyles={styles.additionalStyles}>
              Sign Up
            </Button>
          </View>
          <Form
            formfields={formfields}
            forgotpassword={show}
            resetForm={true && formfields.length === 2}
            signupHandler={() => onPress('signup')}
            onSubmit={loginHandler}
          />
        </View>
        {/* {isOpen && <Backdrop />} */}
        {isOpen && <BottomSheetComponent ref={bottomSheetRef} close={close} />}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.red100,
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcome: {
    paddingLeft: 25,
    fontSize: 38,
    color: colors.black200,
    fontFamily: 'Outfit-Medium',
    width: width * 0.6,
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // backgroundColor: '#ccc',
    // flex: 1,
    marginHorizontal: 15,
    marginTop: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.blue400,
    marginBottom: 60,
    // paddingTop: 10,
    // paddingBottom: 5,
    paddingVertical: 10,
    height: height * 0.6,
  },
  tab: {
    flexDirection: 'row',
    // backgroundColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    margin: 10,
    borderRadius: 15,
    padding: 8,
  },
  additionalStyles: {
    flex: 1,
    // paddingHorizontal: width * 0.13,
  },
});

export default memo(LoginScreen);
