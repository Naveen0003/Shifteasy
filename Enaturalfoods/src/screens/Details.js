
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';


const products = [
  {
    id: 1,
    name: 'Moringa-powder',
    description: 'Healthy Foods',
    price: '$3.99',
    image: require('../../assets/images/moringa-powder.jpg'),
  },
  {
    id: 2,
    name: 'Red Corn',
    description: 'Healthy Foods',
    price: '$2.50',
    image: require('../../assets/images/images (1).jpg'),
  },
  {
    id: 3,
    name: 'Karuppu kavuni',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/Karuppu-Kavuni-Rice-scaled.jpg'),
  },
  {
    id: 4,
    name: 'Samba',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/images (3).jpg'),
  },
  {
    id: 5,
    name: 'Ragi',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/3-500x500.jpg'),
  },
  {
    id: 6,
    name: 'Rice',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/istockphoto-153737841-612x612.jpg'),
  },
  {
    id: 7,
    name: 'Varagu',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/kodo-millet-uzhavu-organic.jpg'),
  },
  {
    id: 8,
    name: 'Thinai',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/thenai-korralu-kangni-thina-navane-setaria-italica--500x500.jpg'),
  },
  {
    id: 9,
    name: 'Kollu',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/premium-horsegram-packaging.jpg'),
  },
  {
    id: 10,
    name: 'White corn',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/istockphoto-1326663369-612x612.jpg'),
  },
  {
    id: 11,
    name: 'Red corn',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/51Ajc3MtQIL._AC_UF1000,1000_QL80_.jpg'),
  },
  {
    id: 12,
    name: 'Mappillai samba',
    description: 'Healthy Foods',
    price: '$1.99',
    image: require('../../assets/images/mud-field-kattu-yanam-rice-01-291x291.jpg'),
  },
  
];

const Details = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    
    console.log(`${product.name} added to cart`);
  };

  const handleLikeProduct = (product) => {
    console.log(`${product.name} added to liked products`);
  };

  return (
    <View style={styles.container}>
     
      <Header navigation={navigation} onSearchToggle={() => setSearchVisible(!searchVisible)} />

     
      {searchVisible && (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

    
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => handleAddToCart(product)} 
               onLike={() => handleLikeProduct(product)}
            />
          ))
        ) : (
          <Text style={styles.noResultsText}>No products found</Text>
        )}
      </ScrollView>

    
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 25,
    paddingTop: 10,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#777',
  },
});

export default Details;
