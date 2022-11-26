import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GOOGLE_MAP_KEY } from '@env';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  console.log('destination', destination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (origin && destination) {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination']);
    }
  }, [origin, destination]);

  return (
    <View style={styles.container}>
      <View style={styles.mapViewContainer}>
        <MapView
          ref={mapRef}
          style={styles.mapView}
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {origin?.location && (
            <Marker
              coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )}

          {destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title="Destination"
              description={destination.description}
              identifier="destination"
            />
          )}

          {origin && destination && (
            <MapViewDirections
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAP_KEY}
              strokeColor="black"
              strokeWidth={3}
            />
          )}
        </MapView>
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
  mapView: { flex: 1 },
  optionsView: { flex: 0.5 },
});

export default MapScreen;
