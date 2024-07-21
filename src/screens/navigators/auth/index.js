import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet} from 'react-native';
import {icons} from '../../../constants/images';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();
const AuthNavigation = () => {
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
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {height: 20, width: 20},
  backImg: {width: 11, height: 18, margin: 20},
});

export default AuthNavigation;
