import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetails = ({ navigation, route }) => {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false); 

  const handleFavoritePress = () => {
    setIsFavorite((prev) => !prev);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1E5703" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <Ionicons name="cart" size={24} color="#1E5703" />
    </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.detailsContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.name}>{product.name}</Text>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "red" : "#1E5703"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
          <Text style={styles.reviews}>{product.reviews} reviews</Text>

          <Text style={styles.description}>
            {showFullDescription ? product.description : `${product.description.split('\n')[0]}...`}
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{showFullDescription ? "Read Less" : "Read More"}</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Ionicons name="remove" size={32} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Ionicons name="add" size={32} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 50,
    backgroundColor: '#D0F3C4',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    color: '#333',
  },
  reviews: {
    fontSize: 14,
    color: '#999',
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'left',
  },
  readMore: {
    color: '#1E5703',
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  addToCartButton: {
    backgroundColor: '#1E5703',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto', 
  },
  quantityButton: {
    backgroundColor: '#1E5703',
    borderRadius: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 15,
    color: '#333',
    marginHorizontal: 1,
    backgroundColor: '#D0F3C4',
    paddingHorizontal: 12,
    paddingVertical: 9, 
    borderRadius: 5, 
    fontWeight: 'bold', 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductDetails;
