import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const OrderSummaryScreen = () => {
  const route = useRoute();
  const { order } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === order.products[0].productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [order.products]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  if (!order) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No order details available.</Text>
      </View>
    );
  }

  const renderProduct = ({ item: product }) => (
    <View style={styles.productDetails}>
      <FlatList
        ref={flatListRef}
        data={product.productImages}
        horizontal
        keyExtractor={(img, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.productImage} />
        )}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} 
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.amount}>Amount: {product.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={order.products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProduct}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.headerText}>Order Summary</Text>
            </View>

            <View style={styles.shopDetails}>
              <Text style={styles.shopName}>E-natural Foods</Text>
              <Text style={styles.shopAddress}>123 Main St, City, Country</Text>
            </View>

            <View style={styles.orderStatus}>
              <Text style={styles.statusText}>Order Status: Delivered</Text>
            </View>
          </>
        }
        ListFooterComponent={
          <View style={styles.paymentDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Payment Method:</Text>
              <Text style={styles.detailValue}>Credit Card</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Order Number:</Text>
              <Text style={styles.detailValue}>{order.id}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Payment Date:</Text>
              <Text style={styles.detailValue}>{order.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Phone Number:</Text>
              <Text style={styles.detailValue}>+1234567890</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Delivery Address:</Text>
              <Text style={styles.detailValue}>{order.location}</Text>
            </View>
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  listContent: {
    padding: 15,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#D0F3C4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  shopDetails: {
    marginBottom: 20,
    alignItems: 'center',
  },
  shopName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  shopAddress: {
    fontSize: 16,
    color: '#666',
  },
  orderStatus: {
    marginBottom: 20,
    backgroundColor: '#D0F3C4',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  productDetails: {
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
   
  },
  productInfo: {
    marginTop: 1,
 },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  paymentDetails: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    color: '#666',
    fontSize: 16,
    maxWidth: '60%',
    textAlign: 'right',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default OrderSummaryScreen;
