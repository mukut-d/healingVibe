import {View} from 'react-native';
import SettingsData from '../../../components/ui/SettingsData';
import {icons} from '../../../constants/images';

const flatlistData = [
  {id: 1, title: 'Profile', icon: icons.profile},
  {id: 2, title: 'Set app lock', icon: icons.applock},
  {id: 3, title: 'Reminders', icon: icons.reminder},
  {id: 4, title: 'Privacy policy', icon: icons.privacy},
  {id: 5, title: 'Rate application', icon: icons.rate},
];

const SettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
      }}>
      {flatlistData.map(item => (
        <SettingsData item={item} key={item.id} />
      ))}
    </View>
  );
};

export default SettingsScreen;
