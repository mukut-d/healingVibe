import {StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {memo} from 'react';

const SwitchComponent = ({toggleSwitch, value, textColor}) => {
  return (
    <View style={styles.switchContainer}>
      <Text
        style={[
          styles.switchText,
          {color: value ? textColor : colors.grey100},
        ]}>
        You can turn on/off morning reminder here
      </Text>
      <Switch
        value={value}
        onValueChange={toggleSwitch}
        trackColor={{false: '#767577', true: colors.green}}
        thumbColor={'white'}
        style={{marginLeft: 50}}
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

export default memo(SwitchComponent);
