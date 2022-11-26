import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import { GOOGLE_MAP_KEY } from '@env';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const onPress = useCallback((data, details = null) => {
    dispatch(setOrigin({ location: details?.geometry?.location, description: data?.description }));
    dispatch(setDestination(null));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Uber</Text>

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails
        returnKeyType={'search'}
        enablePoweredByContainer={false}
        styles={styles.placesAutocomplete}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
        }}
        onPress={onPress}
      />
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
    margin: 4,
  },

  placesAutocomplete: {
    container: {
      flex: 0,
    },
    textInput: {
      fontSize: 18,
    },
  },
});

export default HomeScreen;
