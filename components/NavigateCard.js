import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GOOGLE_MAP_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const titleForCurrentTime = () => {
  const currentHour = new Date().getHours();
  let currentDayTime = 'morning';

  if (currentHour > 12 && currentHour < 18) {
    currentDayTime = 'afternoon';
  } else if (currentHour > 18 && currentHour <= 23) {
    currentDayTime = 'evening';
  }

  return currentDayTime;
};

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onPress = useCallback((data, details = null) => {
    dispatch(
      setDestination({ location: details?.geometry?.location, description: data.description })
    );

    navigation.navigate('RideOptionsCard');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`Good ${titleForCurrentTime()}, user!`} </Text>
      <View style={styles.cardsContainer}>
        <View>
          <GooglePlacesAutocomplete
            styles={inputBoxStyles}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            debounce={400}
            query={{
              key: GOOGLE_MAP_KEY,
              language: 'en',
            }}
            onPress={onPress}
            fetchDetails
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  title: {
    paddingTop: 1,
    paddingBottom: 1,
    textAlign: 'center',
    fontSize: 16,
  },

  cardsContainer: {
    borderTopWidth: 0.5,
    borderColor: 'rgb(229, 231, 235)',
    flexShrink: 1,
  },
});

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
