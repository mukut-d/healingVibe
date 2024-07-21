import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import {memo} from 'react';

const FontCard = ({name, selectedFont, onPress}) => {
  let backgroundColor = 'white';
  let color = 'black';

  if (selectedFont === name) {
    backgroundColor = colors.red300;
    color = 'white';
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(name)}
      style={[
        styles.fontContainer,
        {
          backgroundColor: backgroundColor,
          borderWidth: selectedFont ? 1 : null,
          borderColor: selectedFont ? colors.grey100 : null,
        },
      ]}>
      <Text style={[styles.fontTitle, {color: color}]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    height: 50,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontTitle: {fontFamily: 'Outfit-Regular', fontSize: 16},
});

export default memo(FontCard);
