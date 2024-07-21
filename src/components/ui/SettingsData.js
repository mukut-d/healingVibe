import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons} from '../../constants/images';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const SettingsData = ({item}) => {
  const navigation = useNavigation();
  let startStyles = null;
  let endStyles = null;

  if (item?.title === 'Profile') {
    startStyles = styles.startStyles;
  }

  if (item?.title === 'Rate application') {
    endStyles = styles.endStyles;
  }

  const onPress = () => {
    console.log(item.title);
    navigation.navigate(item?.title);
  };

  return (
    <View
      style={[
        startStyles,
        endStyles,
        {width: width - 50, alignSelf: 'center'},
      ]}>
      <TouchableOpacity style={[styles.root]} onPress={onPress}>
        <View style={styles.iconContainer}>
          <Image source={item.icon} style={styles.icon} resizeMode="contain" />
        </View>
        <Text style={styles.title}>{item?.title}</Text>
        <Image source={icons.back} style={styles.arrow} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    // marginHorizontal: 25,
    marginVertical: 9,
    alignItems: 'center',
    // backgroundColor: colors.red300,
    // borderRadius: 20,
    // backgroundColor: '#ccc',
    paddingVertical: 10,
    // paddingHorizontal: 12,
  },
  icon: {width: 19, height: 19},
  iconContainer: {
    backgroundColor: colors.red300,
    padding: 12,
    borderRadius: 10,
  },
  arrow: {
    width: 17,
    height: 13,
    tintColor: colors.red300,
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 1,
    paddingLeft: 15,
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: 'black',
  },
  startStyles: {
    // backgroundColor: '#ccc',
    borderBottomWidth: 1,
    // paddingVertical: 30,
    marginTop: 30,
    borderBottomColor: colors.grey,
    // marginHorizontal: 20,
  },
  endStyles: {
    borderTopWidth: 1,
    // paddingVertical: 30,
    // marginVertical: 20,
    borderTopColor: colors.grey,
    // marginHorizontal: 25,
  },
});

export default SettingsData;
