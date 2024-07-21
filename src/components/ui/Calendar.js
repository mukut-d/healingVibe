import {StyleSheet, View} from 'react-native';
import {colors} from '../../constants/colors';
import CalendarStrip from 'react-native-calendar-strip';
import {backgroundColor} from '../../util/data';

const Calendar = ({currentIndex}) => {
  return (
    <View style={{backgroundColor: '#ccc'}}>
      <CalendarStrip
        maxDate={new Date()}
        scrollable
        style={styles.calendar}
        calendarColor={backgroundColor[currentIndex]}
        dateNumberStyle={styles.dateNumberStyle}
        dateNameStyle={styles.dateNameStyle}
        showMonth={false}
        dayContainerStyle={styles.dayContainerStyle}
        highlightDateContainerStyle={styles.highlightDateContainerStyle}
        highlightDateNumberStyle={{color: 'white'}}
        highlightDateNameStyle={styles.highlightDateNameStyle}
        iconStyle={styles.iconStyle}
        markedDatesStyle={{backgroundColor: colors.red300}}
        numDaysInWeek={6}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendar: {height: 90, paddingTop: 20, paddingBottom: 20},
  dateNameStyle: {color: 'black'},
  dateNumberStyle: {color: 'black'},
  dayContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 10,
    flexDirection: 'column-reverse',
    borderWidth: 1.5,
    borderColor: colors.greyCalendar,
  },
  highlightDateContainerStyle: {
    backgroundColor: colors.red300,
    borderWidth: 0,
  },
  highlightDateNameStyle: {
    color: 'white',
    fontFamily: 'Outfit-Bold',
    fontSize: 10,
  },
  iconStyle: {display: 'none'},
});
