import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet} from 'react-native';
import {icons} from '../../../constants/images';
import PrivacyScreen from './PrivacyScreen';
import ReminderScreen from './ReminderScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import UpgradeScreen from './UpgradeScreen';
import ProfileScreen from './ProfileScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => (
          <Image source={icons.back} style={styles.backImg} />
        ),
        headerBackTitleVisible: false,
        headerTitleStyle: {fontFamily: 'Outfit-Medium', fontSize: 22},
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
        }}
      />
      <Stack.Screen
        name="forgot"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'View Profile',
        }}
      />
      <Stack.Screen name="Privacy policy" component={PrivacyScreen} />
      <Stack.Screen name="Reminders" component={ReminderScreen} />
      <Stack.Screen name="Change Password" component={ChangePasswordScreen} />
      <Stack.Screen name="Upgrade pro version" component={UpgradeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {height: 20, width: 20},
  backImg: {width: 11, height: 18, margin: 20},
});
export default HomeNav;
