import {memo, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton, RadioGroup} from 'react-native-radio-buttons-group';
import {colors} from '../../constants/colors';

const radioButtons = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Monthly',
    value: 'monthly',
  },
  {
    id: '2',
    label: 'Yearly',
    value: 'yearly',
  },
];

const RadioButtonGroup = () => {
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={{flexDirection: 'row'}}>
      <RadioButton
        id="1"
        containerStyle={[
          styles.container,
          selectedId === '1'
            ? {borderColor: colors.red300}
            : {borderColor: colors.greyRadio},
        ]}
        label="Monthly"
        labelStyle={{fontFamily: 'Outfit-Regular', fontSize: 19}}
        onPress={() => setSelectedId('1')}
        selected={selectedId === '1'}
        borderColor={selectedId === '1' ? colors.red300 : colors.greyRadio}
        color={colors.red300}
        size={17}
      />
      <RadioButton
        id="2"
        containerStyle={[
          styles.container,
          selectedId === '2'
            ? {borderColor: colors.red300}
            : {borderColor: colors.greyRadio},
        ]}
        label="Yearly"
        labelStyle={{fontFamily: 'Outfit-Regular', fontSize: 19}}
        onPress={() => setSelectedId('2')}
        selected={selectedId === '2'}
        borderColor={selectedId === '2' ? colors.red300 : colors.greyRadio}
        color={colors.red300}
        size={17}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '43%',
    borderRadius: 15,
    paddingVertical: 7,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: 'white',
  },
});

export default memo(RadioButtonGroup);
