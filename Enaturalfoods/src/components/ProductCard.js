import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onAddToCart, onLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    onLike(product); // Call the onLike prop function when liked
  };

  // Function to render the stars based on the product rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={18}
          color={i <= rating ? '#FFD700' : '#ccc'}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.productItem}>
      <View style={styles.productContent}>
        <Image source={product.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>

          {/* Display star rating on the right side */}
          <View style={styles.ratingRow}>
            <View style={styles.starsContainer}>
              {renderStars(product.rating)}
            </View>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
              <Ionicons name="cart-outline" size={20} color="white" />
            </TouchableOpacity>

            {/* Like Icon */}
            <TouchableOpacity onPress={handleLikePress}>
              <Ionicons
                name={isLiked ? 'heart' : 'heart-outline'}
                size={24}
                color={isLiked ? 'red' : '#777'}
                style={styles.likeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  addToCartText: {
    color: '#fff',
    marginRight: 5,
    fontSize: 15,
  },
  likeIcon: {
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default ProductCard;
  