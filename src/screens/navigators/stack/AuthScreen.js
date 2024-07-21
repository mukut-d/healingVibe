import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import {colors} from '../../../constants/colors';
import Button from '../../../components/ui/Button';

function getAuth() {
  auth()
    .createUserWithEmailAndPassword(
      'jane.doe@example.com',
      'SuperSecretPassword!',
    )
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

function getToken() {
  let jwtToken = auth().onAuthStateChanged(function (user) {
    if (user) {
      user.getIdToken().then(function (idToken) {
        // <------ Check this line
        alert(idToken); // It shows the Firebase token now
        return idToken;
      });
    }
  });

  console.log('token--', jwtToken);
  return jwtToken;
}

function AuthScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

    // if (user) {
    //   user.getIdToken().then(function (idToken) {
    //     // <------ Check this line
    //     alert(idToken); // It shows the Firebase token now

    //     return idToken;
    //   });
    // }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // if (!user) {
  //   return (
  //     <View>
  //       <Text>Login</Text>
  //     </View>
  //   );
  // }

  const signUpWithEmailPass = async () => {
    await auth()
      .signInWithEmailAndPassword('karan.silversky+2w@gmail.com', '123456')
      .then(token => {
        console.log(token.user.providerData);
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

    getToken(user);
  };

  const onPress = () => {
    console.log(email);
    console.log(password);
    signUpWithEmailPass();
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: colors.red100,
          height: 400,
          width: '70%',
          paddingVertical: 20,
        }}>
        <Text style={{color: colors.black200}}>Email</Text>
        <TextInput
          onChangeText={setEmail}
          style={{
            backgroundColor: 'white',
            color: colors.black100,
            marginBottom: 20,
          }}
        />

        <Text style={{color: colors.black200}}>Password</Text>
        <TextInput
          onChangeText={setPassword}
          style={{
            backgroundColor: 'white',
            color: colors.black100,
            marginBottom: 20,
          }}
        />
        <Button onPress={onPress}>signup</Button>
      </View>
    </View>
  );
}

export default AuthScreen;
