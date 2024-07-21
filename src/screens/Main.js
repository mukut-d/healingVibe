import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import HomeNav from './navigators/stack';
import AuthNavigation from './navigators/auth';

const Stack = createStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);

  console.log('token MAIN NAV', token);

  return (
    <View style={{flex: 1}}>{token ? <HomeNav /> : <AuthNavigation />}</View>
  );
};

export default Main;
