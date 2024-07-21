import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/navigators/auth/LoginScreen';
import { Image, Platform, StatusBar, StyleSheet } from 'react-native';
import ForgotPasswordScreen from './src/screens/navigators/stack/ForgotPasswordScreen';
import HomeScreen from './src/screens/navigators/stack/HomeScreen';
import SettingsScreen from './src/screens/navigators/stack/SettingsScreen';
import { icons } from './src/constants/images';
import PrivacyScreen from './src/screens/navigators/stack/PrivacyScreen';
import ReminderScreen from './src/screens/navigators/stack/ReminderScreen';
import ChangePasswordScreen from './src/screens/navigators/stack/ChangePasswordScreen';
import UpgradeScreen from './src/screens/navigators/stack/UpgradeScreen';
import ProfileScreen from './src/screens/navigators/stack/ProfileScreen';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import { receiveQuestion } from './src/util/prompts';
import AuthScreen from './src/screens/navigators/stack/AuthScreen';
import { setQuestions } from './src/store/prompts';
import Main from './src/screens/Main';
import { clearToken } from './src/store/auth';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }

  useEffect(() => {

    // dispatch(clearToken())


    // Hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);



  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};



export default App;
