import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import SignIn from './src/screens/SignIn';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
