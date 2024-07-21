import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import {icons} from '../../../constants/images';
import {memo, useState} from 'react';
import ReminderCard from '../../../components/ReminderCard';

const ReminderScreen = () => {
  const [value, toggleSwitch] = useState();

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.container,
          value ? {borderBottomWidth: 1, borderBottomColor: colors.grey} : null,
        ]}>
        <View
          style={[
            styles.reminderContainer,
            value
              ? {borderColor: colors.red300}
              : {borderColor: colors.greyReminder},
          ]}>
          <Image
            source={icons.reminder}
            style={styles.icon}
            resizeMode="contain"
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Push Reminders</Text>
            <Text style={styles.subtitle}>you can turn on/off here</Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: colors.red300}}
            thumbColor={'white'}
            // ios_backgroundColor={colors.red300}
            onValueChange={toggleSwitch}
            value={value}
            // style={{backgroundColor: '#ccc'}}
          />
        </View>
      </View>
      {value && (
        <>
          <ReminderCard
            title={'Morning'}
            backgroundColor={colors.yellow100}
            textColor={colors.blue500}
            additionalStyles={styles.additionalStyles}
          />
          <ReminderCard
            title={'Evening'}
            backgroundColor={colors.purple100}
            textColor={colors.purple200}
          />
        </>
      )}
      {!value && (
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: colors.grey100,
            marginHorizontal: 30,
          }}>
          Turn on the button and set reminders so that we can remind you to stay
          updated with your daily vibes.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    //   backgroundColor: '#ccc',
    marginHorizontal: 30,
    marginTop: 20,
    paddingVertical: 30,
  },
  subtitle: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: colors.grey100,
  },
  title: {fontFamily: 'Outfit-Regular', fontSize: 16},
  titleContainer: {flex: 1, paddingLeft: 10},
  icon: {width: 20, height: 20, tintColor: colors.red300},
  reminderContainer: {
    // backgroundColor: '#ccc',
    borderWidth: 1,

    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  additionalStyles: {
    marginTop: 30,
  },
});

export default memo(ReminderScreen);
