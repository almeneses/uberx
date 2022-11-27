import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GOOGLE_MAP_KEY } from '@env';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import Map from '../components/Map';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.mapViewContainer}>
        <Map />
      </View>

      <View style={styles.optionsView}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  mapViewContainer: { flex: 0.5 },
  optionsView: { flex: 0.5 },
});

export default MapScreen;
