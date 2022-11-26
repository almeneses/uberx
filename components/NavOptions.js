import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { IconOutline } from '@ant-design/icons-react-native';
import { useNavigation } from '@react-navigation/native';

import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '1456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'OrderScreen',
  },
];

const createItemRenderer =
  ({ navigation, disabled }) =>
  ({ item }) =>
    (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(item.screen)}
        disabled={disabled}
      >
        <View style={disabled ? styles.disabledContainer : null}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.title}</Text>
          <IconOutline name="arrow-right" color="white" size={15} style={styles.arrowRight} />
        </View>
      </TouchableOpacity>
    );

const keyExtractor = (item) => item.id;

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const itemRenderer = useMemo(
    () => createItemRenderer({ navigation, disabled: !origin }),
    [origin]
  );

  return (
    <FlatList
      data={data}
      renderItem={itemRenderer}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.navItemContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingLeft: 12,
    paddingBottom: 8,
    paddingTop: 4,
    width: 140,
    backgroundColor: 'rgb(229, 231, 235)',
    height: 210,
  },

  disabledContainer: {
    opacity: 0.3,
  },

  navItemContainer: {
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    height: 110,
    width: 120,
    resizeMode: 'contain',
  },

  text: {
    marginTop: 2,
    fontWeight: '700',
  },

  arrowRight: {
    padding: 12,
    marginTop: 12,
    backgroundColor: 'black',
    width: 40,
    borderRadius: 1000,
    textAlign: 'center',
  },
});

export default NavOptions;
