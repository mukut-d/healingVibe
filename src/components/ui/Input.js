import {memo, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../constants/colors';
import {icons} from '../../constants/images';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';

const Input = ({
  Controller,
  control,
  errors,
  item,
  secure = false,
  additionalStyles,
  extraPlaceholderStyles,
  extraInputStyles,
  isBottomSheet,
}) => {
  const [error, setError] = useState({});
  useEffect(() => {
    setError(errors);
  }, [errors]);

  let borderColor = colors.blue400;
  let marginTop = null;

  if (error[item?.name]) {
    borderColor = 'red';
  }

  if (item?.name === 'password') {
    // marginTop = 80;
  }

  return (
    <Controller
      name={item?.name}
      control={control}
      rules={item?.rules}
      render={({field: {onChange, value}}) => (
        // <View style={[styles.root, additionalStyles, {marginTop: marginTop}]}>
        <>
          <View
            style={[
              styles.inputContainer,
              extraInputStyles,
              {borderColor: borderColor},
            ]}>
            <Text style={[styles.placeholder, extraPlaceholderStyles]}>
              {item?.placeholder}
            </Text>
            {!isBottomSheet ? (
              <TextInput
                style={[styles.input, additionalStyles]}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secure}
              />
            ) : (
              <BottomSheetTextInput
                style={[styles.input, additionalStyles]}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secure}
              />
            )}

            {item?.name === 'password' || item?.name === 'newPassword' ? (
              <Image
                source={icons.secureText}
                style={styles.imgStyle}
                resizeMode="contain"
              />
            ) : null}
          </View>
          {error[item?.name] && (
            <Text style={styles.error}>{error[item.name]?.message}</Text>
          )}
        </>
        // </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    // backgroundColor: '#ccc',
    // margin: 60,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    borderColor: colors.blue400,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 5,
  },
  imgStyle: {height: 15, width: 15, paddingRight: 60},
  placeholder: {
    color: colors.grey100,
    paddingLeft: 10,
    // width: '25%',
    // paddingHorizontal: 10,
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
    // backgroundColor: '#ccc',
  },

  error: {
    color: 'red',
    paddingHorizontal: 20,
    paddingVertical: 2.5,
  },
  input: {
    flex: 1,
    fontFamily: 'Outfit-Regular',
    fontSize: 17,
  },
});

export default memo(Input);
