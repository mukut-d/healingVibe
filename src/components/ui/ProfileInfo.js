import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/colors';
import {icons} from '../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken} from '../../store/auth';
import {userLogout} from '../../util/prompts';
import auth from '@react-native-firebase/auth';
import {memo} from 'react';

const ProfileInfo = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tokenBackend = useSelector(state => state.auth.token);

  let startStyles = null;
  let endStyles = null;

  if (item?.title === 'Profile') {
    startStyles = styles.startStyles;
  }

  if (item?.title === 'Rate application') {
    endStyles = styles.endStyles;
  }

  const onPress = async () => {
    if (item?.title === 'Log out') {
      await userLogout(tokenBackend);
      dispatch(clearToken());
      await auth().signOut();
      return;
    }
    navigation.navigate(item?.title);
  };

  return (
    <TouchableOpacity
      style={[styles.root, startStyles, endStyles]}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{item?.title}</Text>
      <Image source={icons.back} style={styles.arrow} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default memo(ProfileInfo);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 12,
    alignItems: 'center',
    backgroundColor: colors.red300,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  icon: {width: 19, height: 19, tintColor: 'white'},
  iconContainer: {
    backgroundColor: colors.red300,
    // padding: 12,
    borderRadius: 10,
  },
  arrow: {
    width: 17,
    height: 13,
    // tintColor: colors.red300,
    tintColor: 'white',
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 1,
    paddingLeft: 15,
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: 'white',
  },
  startStyles: {
    borderBottomWidth: 1,
    paddingVertical: 30,
    marginVertical: 20,
    borderBottomColor: colors.grey,
    marginTop: 60,
  },
  endStyles: {
    borderTopWidth: 1,
    paddingVertical: 30,
    marginVertical: 20,
    borderTopColor: colors.grey,
  },
});
