import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Where I live',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Workplace',
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <AntDesign style={styles.icon} name="home" size={20} color="white" />
    <View>
      <Text style={styles.itemTitle}>{item.location}</Text>
      <Text style={styles.itemSubtitle}>{item.destination}</Text>
    </View>
  </TouchableOpacity>
);

const renderSeparator = () => <View style={styles.separator} />;

const NavFavorites = () => (
  <FlatList
    style={styles.container}
    data={data}
    renderItem={renderItem}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
  />
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  itemTitle: {
    fontWeight: '600',
    fontSize: 16,
  },

  itemSubtitle: {
    color: 'rgb(107,114,128)',
  },

  icon: {
    marginRight: 12,
    borderRadius: 999,
    backgroundColor: 'rgb(209, 213, 219)',
    padding: 12,
  },

  separator: {
    height: 0.5,
    backgroundColor: 'rgb(229,231,235)',
  },
});

export default NavFavorites;
