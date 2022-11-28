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
          <IconOutline name="arrow-right" color="white" size={15} style={styles.arrow} />
        </View>
      </TouchableOpacity>
    );

const keyExtractor = (item) => item.id;

const NavOptions = ({ style }) => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const itemRenderer = useMemo(
    () => createItemRenderer({ navigation, disabled: !origin }),
    [origin]
  );

  return (
    <FlatList
      style={style}
      data={data}
      renderItem={itemRenderer}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.navItemContainer}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingLeft: 10,
    paddingBottom: 14,
    paddingTop: 8,
    backgroundColor: 'rgb(229, 231, 235)',
  },

  disabledContainer: {
    opacity: 0.3,
  },

  navItemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  image: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },

  text: {
    marginTop: 8,
    fontWeight: '700',
  },

  arrow: {
    padding: 12,
    marginTop: 12,
    backgroundColor: 'black',
    width: 40,
    borderRadius: 100,
    textAlign: 'center',
  },
});

export default NavOptions;
