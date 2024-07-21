import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';

const Button = ({
  icon = false,
  mode = 'dark',
  borderwidth = null,
  additionalStyles,
  additionalText,
  onPress,
  children,
}) => {
  let backgroundColor = colors.black100;
  let color = colors.white;

  if (mode === 'light') {
    backgroundColor = 'rgba(255, 255, 255, 0.5)';
    color = colors.black100;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnContainer,
        {backgroundColor: backgroundColor, borderWidth: borderwidth},
        additionalStyles,
      ]}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      <Text style={[styles.btnText, {color: color}, additionalText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    // backgroundColor: colors.black100,
    borderRadius: 23,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // width: '100%',
  },
  btnText: {
    color: colors.white,
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    paddingVertical: 10,
  },
  icon: {width: 25, height: 25},
});

export default Button;
