import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameInput = (value: string) => {
    setUsername(value);
  };

  const handlePasswordInput = (value: string) => {
    setPassword(value);
  };

  const handleSignInPress = () => {
    console.warn('Sign in');
  };

  const handleForgotPasswordPress = () => {
    console.warn('Forgot Password');
  };

  const handleSignInFacebookPress = () => {
    console.warn('Facebook Sign In');
  };

  const handleSignInGooglePress = () => {
    console.warn('Google Sign In');
  };

  const handleSignInApplePress = () => {
    console.warn('Apple Sign In');
  };

  const handleSignUpPress = () => {
    console.warn('Sign Up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../../../assets/images/Logo_1.png')}
          style={[
            styles.logo,
            {
              height: height * 0.3,
            },
          ]}
          resizeMode="contain"
        />
        <Input
          value={username}
          onChange={handleUsernameInput}
          placeholder="Enter your username"
        />
        <Input
          value={password}
          onChange={handlePasswordInput}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Button title="Sign In" onPress={handleSignInPress} />
        <Button
          title="Forgot Password?"
          variant="link"
          onPress={handleForgotPasswordPress}
        />

        {/* Social Buttons */}
        <Button
          title="Sign In with Facebook"
          onPress={handleSignInFacebookPress}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <Button
          title="Sign In with Google"
          onPress={handleSignInGooglePress}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <Button
          title="Sign In with Apple"
          onPress={handleSignInApplePress}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />

        <Button
          title="Don't have an account? Create one."
          variant="link"
          onPress={handleSignUpPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
