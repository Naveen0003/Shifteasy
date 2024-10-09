import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing icon library

const CartScreen = ({ navigation }) => {
  const [quantity1, setQuantity1] = useState(2);
  const [quantity2, setQuantity2] = useState(2);
  const productPrice1 = 15.30;
  const productPrice2 = 12.00;

  const incrementQuantity1 = () => setQuantity1(quantity1 + 1);
  const decrementQuantity1 = () => setQuantity1(quantity1 > 1 ? quantity1 - 1 : 1);

  const incrementQuantity2 = () => setQuantity2(quantity2 + 1);
  const decrementQuantity2 = () => setQuantity2(quantity2 > 1 ? quantity2 - 1 : 1);

  const subtotal = (quantity1 * productPrice1 + quantity2 * productPrice2).toFixed(2);
  const tax = (subtotal * 0.1).toFixed(2);
  const delivery = 1.00;
  const total = (parseFloat(subtotal) + parseFloat(tax) + delivery).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <View style={styles.productContainer}>
        <Image 
          source={require('../../assets/images/images (2).jpg')} 
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Rice</Text>
          <Text style={styles.productPrice}>$15.30</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity1} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity1}</Text>
            <TouchableOpacity onPress={incrementQuantity1} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productContainer}>
        <Image 
          source={require('../../assets/images/premium-horsegram-packaging.jpg')} 
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Kollu</Text>
          <Text style={styles.productPrice}>$12.00</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity2} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity2}</Text>
            <TouchableOpacity onPress={incrementQuantity2} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promoCodeContainer}>
        <TextInput style={styles.promoCodeInput} placeholder="Promo Code" />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal:</Text>
          <Text style={styles.summaryValue}>${subtotal} USD</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Tax and Fees:</Text>
          <Text style={styles.summaryValue}>${tax} USD</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery:</Text>
          <Text style={styles.summaryValue}>${delivery.toFixed(2)} USD</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalValue}>${total} USD</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    position: 'relative',
    paddingVertical: 10,
    paddingTop: 60,
    paddingHorizontal: 15,
    backgroundColor: '#D0F3C4',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: '240%',
    transform: [{ translateY: -12 }],
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginRight:15,
    marginLeft:15,
    
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
    marginTop:10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    padding: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 18,
    color: '#1E5703',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    marginRight:15,
    marginLeft:15,
  },
  promoCodeInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 3,
  },
  summaryContainer: {
    marginBottom: 20,
    marginRight:15,
    marginLeft:15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 50,
    marginRight:15,
    marginLeft:15,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
