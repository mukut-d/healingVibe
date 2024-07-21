import {memo, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/colors';
import DatePicker from 'react-native-date-picker';
import {getTime} from './Alarm';
import moment from 'moment';

const Alram2 = ({enableTime = false, textColor}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeShown, setTimeShown] = useState(null);

  const onConfirm = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setTimeShown(() => {
      let selectedTime = moment(selectedDate)
        .local()
        .format('YYYY-MM-DD HH:mm:ss');
      selectedTime = selectedTime.slice(11, 16);
      return getTime(selectedTime);
    });
  }, [selectedDate]);

  return (
    <Pressable onPress={() => setOpen(true)}>
      <Text
        style={[styles.time, {color: enableTime ? textColor : colors.grey100}]}>
        {!timeShown ? '09:47' : timeShown?.slice(0, 5)}
        <Text style={styles.am}>{!timeShown ? 'am' : timeShown?.slice(5)}</Text>
      </Text>

      {enableTime && (
        <DatePicker
          modal
          mode="time"
          open={open}
          date={selectedDate}
          onDateChange={setSelectedDate}
          onConfirm={date => {
            setOpen(false);
            onConfirm(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          is24hourSource="locale"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {},

  notEnabledText: {
    color: colors.grey200,
    fontSize: 30,
    paddingHorizontal: 25,
    paddingVertical: 10,
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

export default memo(Alram2);
