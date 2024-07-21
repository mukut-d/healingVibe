import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {forwardRef, memo, useCallback, useMemo} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import {icons} from '../../constants/images';
import {Controller, useForm} from 'react-hook-form';
import Button from './Button';
import Input from './Input';

const emailItem = {
  name: 'email',
  rules: {
    required: {
      value: true,
      message: 'This is a required field',
    },
  },
  placeholder: 'Email',
};

const BottomSheetComponent = forwardRef(({close}, ref) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const snapPoints = useMemo(() => ['40%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'close'}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      onClose={Keyboard.dismiss}
      ref={ref}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{display: 'none'}}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <BottomSheetView style={styles.contentContainer}>
        <KeyboardAvoidingView
          style={{flexDirection: 'row', alignItems: 'center'}}
          behavior="height">
          <Text style={{flex: 1, fontFamily: 'Outfit-Medium', fontSize: 24}}>
            Forgot Password
          </Text>
          <TouchableOpacity onPress={close}>
            <Image
              source={icons.close}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 15,
            color: colors.grey200,
            width: '100%',
            paddingVertical: 10,
            marginBottom: 30,
          }}>
          Don’t worry ! it happens. Please enter the email address associated
          with your account.
        </Text>
        <Input
          Controller={Controller}
          control={control}
          errors={errors}
          item={emailItem}
          additionalStyles={{width: '100%', paddingVertical: 10}}
          isBottomSheet
        />
        <Button
          additionalStyles={{marginVertical: 30, width: '100%'}}
          onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
});

export default memo(BottomSheetComponent);
