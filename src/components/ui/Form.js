import {Controller, useForm} from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Input from './Input';
import Button from './Button';
import {icons} from '../../constants/images';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {memo, useCallback, useEffect} from 'react';

const Form = ({formfields, forgotpassword, signupHandler, onSubmit}) => {
  const navigation = useNavigation();
  const defaultValues = {
    firstName: '',
    email: 'karan.silversky+2w@gmail.com',
    password: '123456',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({defaultValues: defaultValues});

  const loginSubmit = useCallback(data => {
    onSubmit(data);

    reset();
  }, []);

  const gotoforgot = () => {
    // navigation.navigate('forgot');
    forgotpassword();
  };
  // console.log(formfields);

  const goToHome = () => {
    navigation.navigate('home');
  };

  useEffect(() => {
    reset();
  }, [formfields.length]);

  return (
    <KeyboardAvoidingView style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={{flex: 1}}>
            {formfields?.map(item => (
              <>
                <Input
                  Controller={Controller}
                  control={control}
                  errors={errors}
                  item={item}
                  key={item?.id}
                  secure={item?.name === 'password'}
                  additionalStyles={styles.input}
                />
                {formfields?.length === 2 && item?.name === 'password' && (
                  <Text
                    key={item?.name}
                    onPress={gotoforgot}
                    style={{
                      fontFamily: 'Outfit-Medium',
                      fontSize: 14,
                      // paddingTop: 5,
                      paddingBottom: 20,
                      alignSelf: 'flex-end',
                      paddingEnd: 20,
                    }}>
                    Forgot Password?
                  </Text>
                )}
              </>
            ))}
          </View>
          <View style={{}}>
            <Button
              additionalStyles={[styles.additionalStyles]}
              onPress={handleSubmit(loginSubmit)}>
              {formfields?.length === 3 ? 'Sign Up' : 'Log In'}
            </Button>
            <Text style={styles.or}>Or</Text>
            <Button
              mode="light"
              onPress={goToHome}
              icon={icons.apple}
              additionalStyles={[
                // styles.additionalStyles,
                {backgroundColor: 'rgba(255, 255, 255, 0.9)'},
              ]}
              additionalText={styles.additionalText}
              borderwidth={1}>
              {formfields?.length === 3 ? 'Sign Up' : 'Log In'} with Apple
            </Button>
            {formfields?.length === 2 && (
              <Text style={styles.dont}>
                Don't have an account ?{' '}
                <Text
                  style={styles.create}
                  onPress={() => {
                    signupHandler();
                    console.log('pressed');
                  }}>
                  Create New Account
                </Text>
              </Text>
            )}
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 2,
    // height: '60%',
    // paddingVertical: 15,
    // backgroundColor: '#ccc',
    paddingHorizontal: 20,
  },
  additionalStyles: {},
  // additionalStyles: {marginVertical: 10, marginHorizontal: 20},
  additionalText: {
    fontFamily: 'Outfit-Regular',
    paddingHorizontal: 10,
  },
  or: {
    // backgroundColor: '#ccc',
    alignSelf: 'center',
    paddingVertical: 5,
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
    color: colors.grey400,
  },
  dont: {
    fontSize: 14.5,
    fontFamily: 'Outfit-Regular',
    color: colors.grey200,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  create: {
    fontFamily: 'Outfit-Medium',
    color: colors.black100,
    textDecorationLine: 'underline',
  },
  input: {marginHorizontal: 15, paddingVertical: 10},
});

export default memo(Form);
