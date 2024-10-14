import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

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
        <Swiper
          showsButtons={false}
          loop={false}
          autoplay={true}
          autoplayTimeout={3}
          height={350}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          nextButton={<Ionicons name="arrow-forward" size={28} color="#1E5703" />}
          prevButton={<Ionicons name="arrow-back" size={28} color="#1E5703" />}
        >
          {product.image.map((imgUrl, index) => (
            <Image key={index} source={{ uri: imgUrl }} style={styles.productImage} />
          ))}
        </Swiper>

        <View style={styles.detailsContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.name}>{product.name}</Text>
            <TouchableOpacity onPress={handleFavoritePress}>
              <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : '#1E5703'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
          <Text style={styles.reviews}>{product.reviews}</Text>

          <Text style={styles.description}>
            {showFullDescription ? product.description : `${product.description.split('\n')[0]}...`}
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.readMore}>{showFullDescription ? 'Read Less' : 'Read More'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

     
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Ionicons name="remove" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#D0F3C4',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    paddingBottom: 100, 
  },
  productImage: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
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
  fixedButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#F9F9F9',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  addToCartButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
    
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#1E5703',
    borderRadius: 5,
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
    backgroundColor: '#D0F3C4',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dotStyle: {
    backgroundColor: '#A8D8A4', 
  },
  activeDotStyle: {
    backgroundColor: '#1E5703',
  },
});

export default ProductDetails;
