import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons} from '../../../constants/images';
import {colors} from '../../../constants/colors';
import FontCard from '../../../components/FontCard';
import SettingsData from '../../../components/ui/SettingsData';
import {useState} from 'react';
import ProfileInfo from '../../../components/ui/ProfileInfo';

const profileData = [
  {id: 1, title: 'Change Password', icon: icons.password},
  {id: 2, title: 'Upgrade pro version', icon: icons.upgrade},
  {id: 3, title: 'Log out', icon: icons.logout},
];

const ProfileScreen = ({}) => {
  const [selectedFont, setSelectedFont] = useState('Open Sans');

  const onPress = mode => {
    setSelectedFont(mode);
  };

  return (
    <View style={styles.root}>
      <View style={styles.profile}>
        <Image source={icons.profile} style={styles.profileImg} />
      </View>
      <View style={styles.profileName}>
        <Text style={styles.profileNameText}>Sarah</Text>
        <Image source={icons.edit} style={styles.editImg} />
      </View>
      <Text style={styles.email}>sarah09@gmail.com</Text>
      <Text
        style={
          styles.selectFont
        }>{`${'Select any font you want to choose'.toUpperCase()}`}</Text>
      <ScrollView
        horizontal
        style={{
          marginHorizontal: 25,
          borderBottomWidth: 1,
          borderBottomColor: colors.grey100,
        }}
        contentContainerStyle={{alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}>
        {['Roboto', 'Open Sans', 'Lato', 'Outfit'].map(item => (
          <FontCard name={item} selectedFont={selectedFont} onPress={onPress} />
        ))}
      </ScrollView>
      <View style={{height: '51%'}}>
        {/* <View> */}
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 14,
            color: colors.grey500,
            marginHorizontal: 25,
            marginTop: 30,
            marginBottom: 5,
          }}>
          PROFILE INFORMATION
        </Text>
        {profileData?.map(item => (
          <ProfileInfo item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  profile: {
    alignSelf: 'center',
    backgroundColor: colors.grey100,
    borderRadius: 100,
    padding: 25,
    marginTop: 30,
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  profileName: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.grey100,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: 'white',
  },
  profileNameText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
    paddingRight: 10,
  },
  editImg: {width: 20, height: 20},
  email: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: colors.grey300,
    alignSelf: 'center',
  },
  selectFont: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 25,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: colors.grey500,
    justifyContent: 'flex-start',
  },
});

export default ProfileScreen;
