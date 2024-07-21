import DatePicker from 'react-native-date-picker';
import {colors} from '../../constants/colors';
import {memo, useEffect, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';

export function getTime(time) {
  var timeParts = time.split(':');
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  // Determine AM or PM
  var period = hours >= 12 ? 'pm' : 'am';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? '0' + hours : hours;

  // Format minutes with leading zero if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the 12-hour time string
  var time12 = hours + ':' + minutes + ' ' + period;

  return time12;
}

const Alarm = ({enableTime = false, textColor}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const [timeShown, setTimeShown] = useState(null);

  const onConfirm = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setTimeShown(() => {
      let selectedTime = selectedDate.toISOString().slice(11, 16);
      return getTime(selectedTime);
    });
  }, [selectedDate]);

  console.log(selectedDate);
  const timeZone = new Date().getTimezoneOffset();
  console.log(timeZone);

  return (
    <Pressable onPress={() => setOpen(true)} disabled={!enableTime}>
      <Text
        style={[styles.time, {color: enableTime ? textColor : colors.grey100}]}>
        {!timeShown ? '09:47' : timeShown?.slice(0, 5)}
        <Text style={styles.am}>{!timeShown ? 'am' : timeShown?.slice(5)}</Text>
      </Text>

      {enableTime && (
        <DatePicker
          modal
          mode={'time'}
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
          timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
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

export default memo(Alarm);
