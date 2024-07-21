import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {memo, useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/ui/Button';

const ForgotPasswordScreen = () => {
  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const snapPoints = useMemo(() => ['40%'], []);

  console.log(bottomSheetRef);

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  return (
    <View style={styles.container}>
      <Text>hii</Text>
      <Button onPress={openBottomSheet}>Open</Button>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Button onPress={closeBottomSheet}>Close</Button>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export default memo(ForgotPasswordScreen);
