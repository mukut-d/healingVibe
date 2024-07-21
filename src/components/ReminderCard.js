import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import {icons} from '../constants/images';
import {memo, useState} from 'react';
import SwitchComponent from './ui/SwitchComponent';
import Alarm from './ui/Alarm';
import Alram2 from './ui/Alram2';

const ReminderCard = ({
  additionalStyles,
  backgroundColor,
  textColor,
  title,
}) => {
  const [value, toggleSwitch] = useState();
  return (
    <View
      style={[
        styles.root,
        {backgroundColor: value ? backgroundColor : 'white'},
        additionalStyles,
        {},
      ]}>
      <View style={styles.title}>
        <Image
          source={icons.reminderCard}
          style={[styles.icon, {tintColor: value ? textColor : colors.grey100}]}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.titleText,
            {color: value ? textColor : colors.grey100},
          ]}>
          {title}
        </Text>
      </View>
      <Alram2 enableTime={value} textColor={textColor} />
      <SwitchComponent
        value={value}
        toggleSwitch={toggleSwitch}
        textColor={textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30,
    marginVertical: 15,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 15,
    borderRadius: 20,
  },
  title: {flexDirection: 'row', alignItems: 'center'},
  titleText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 22,
    color: colors.blue500,
    paddingLeft: 10,
  },
  time: {
    fontFamily: 'Outfit-Regular',
    fontSize: 60,
    color: colors.blue500,
    marginVertical: 10,
  },
  am: {fontFamily: 'Outfit-Regular', fontSize: 20},
  icon: {width: 20, height: 20},
  switchContainer: {flexDirection: 'row', alignItems: 'center'},
  switchText: {
    flex: 1,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: colors.blue500,
    // padding: 30,
  },
});

export default memo(ReminderCard);
