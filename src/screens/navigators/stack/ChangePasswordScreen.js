import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import Input from '../../../components/ui/Input';
import {Controller, useForm} from 'react-hook-form';
import Button from '../../../components/ui/Button';
import {memo} from 'react';
const {width} = Dimensions.get('screen');

const CHANGEPASSWORD = [
  {
    name: 'password',
    rules: {
      required: {
        value: true,
        message: 'This is a required field',
      },
    },
    placeholder: 'Current password',
  },
  {
    name: 'newPassword',
    rules: {
      required: {
        value: true,
        message: 'This is a required field',
      },
    },
    placeholder: 'New password',
  },
];

const ChangePasswordScreen = ({}) => {
  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({defaultValues: defaultValues});

  return (
    <View style={styles.root}>
      <Text style={styles.subtitle}>
        Your new password must be different from the previously used password
      </Text>
      {CHANGEPASSWORD.map(item => (
        <Input
          item={item}
          Controller={Controller}
          control={control}
          errors={errors}
          key={item?.name}
          secure
          additionalStyles={styles.additionalStyles}
          extraPlaceholderStyles={styles.extraPlaceholderStyles}
          extraInputStyles={styles.extraInputStyles}
        />
      ))}
      <Button
        additionalStyles={styles.additionalStylesButton}
        onPress={() => {}}>
        Reset Password
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white', padding: 20},
  subtitle: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: colors.grey200,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 50,
  },
  additionalStyles: {
    // margin: 10,
    // marginTop: 50,
    // backgroundColor: '#ccc',
    paddingVertical: 15,
  },
  additionalStylesButton: {
    backgroundColor: colors.red300,
    marginHorizontal: 10,
    marginVertical: 50,
  },
  extraPlaceholderStyles: {
    // backgroundColor: '#ccc',
    width: width * 0.42,
    paddingLeft: 10,
  },
  extraInputStyles: {
    paddingVertical: 0,
    marginVertical: 12,
  },
});

export default memo(ChangePasswordScreen);
