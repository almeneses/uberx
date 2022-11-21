import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { IconOutline } from '@ant-design/icons-react-native';
import { useNavigation } from '@react-navigation/native';

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

const createListItemRenderer =
  (navigation) =>
  ({ item }) =>
    (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(item.screen)}>
        <View>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.title}</Text>
          <IconOutline name="arrow-right" color="white" size={15} style={styles.arrowRight} />
        </View>
      </TouchableOpacity>
    );

const keyExtractor = (item) => item.id;

const NavOptions = () => {
  const navigation = useNavigation();
  const itemRenderer = createListItemRenderer(navigation);
  return <FlatList data={data} horizontal renderItem={itemRenderer} keyExtractor={keyExtractor} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingLeft: 12,
    paddingBottom: 8,
    paddingTop: 4,
    margin: 6,
    width: 140,
    backgroundColor: 'rgb(229, 231, 235)',
    height: 210,
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
