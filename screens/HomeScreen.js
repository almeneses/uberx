import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Uber</Text>
      <NavOptions />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
  },
  title: {
    fontFamily: 'uber-move-medium',
    fontSize: 35,
  },
});

export default HomeScreen;
