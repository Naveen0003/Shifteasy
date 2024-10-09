import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';


const favorites = [
  {
    id: 1,
    name: 'Moringa-powder',
    price: '$3.99',
    image: require('../../assets/images/moringa-powder.jpg'),
  },
  {
    id: 2,
    name: 'Red Corn',
    price: '$2.50',
    image: require('../../assets/images/51Ajc3MtQIL._AC_UF1000,1000_QL80_.jpg'),
  },
  
];

const FavoritesScreen = () => {
  const renderFavoriteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFavoriteItem}
        contentContainerStyle={styles.listContainer}
      />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightyellow',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
});

export default FavoritesScreen;
