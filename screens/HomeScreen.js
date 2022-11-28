import React, { useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

import { GOOGLE_MAP_KEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const onPress = useCallback((data, details = null) => {
    dispatch(setOrigin({ location: details?.geometry?.location, description: data?.description }));
    dispatch(setDestination(null));
  });

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
      <NavOptions style={styles.navOptions} />
      <NavFavorites />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

  navOptions: {
    paddingBottom: 10,
    flexGrow: 0,
  },
});

export default HomeScreen;
