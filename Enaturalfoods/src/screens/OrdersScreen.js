import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const OrdersScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const orders = [
    {
      id: '1',
      products: [
        {
          productImages: [
            'https://satopradhan.com/cdn/shop/products/moringa-leaf-powder-100g-freshly-ground-using-organically-grown-and-naturally-shade-dried-moringa-leaves-no-additives-satopradhan-1-31166152835298.jpg?v=1696575060&width=1024',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUR4KjaZqFWUWuNnjAKga-e6IZzpB758hvLueeRb_Qc5v4IqIKSZrFH_cIftVp6Tlig8&usqp=CAU',
            
          ],
          productName: 'Moringa powder & Laddu',
          price: '$10.00',
        },
        
      ],
      deliveryTime: '3:00 PM',
      date: '2024-10-15',
      location: '123 Main St',
    },
    {
      id: '2',
      products: [
        {
          productImages: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqel-0YFeoe8V3uwnjCtcenZPOu-Aa6KUxg&s',
          ],
          productName: 'Vellai Solam - Sorghum',
          price: '$15.00',
        },
      ],
      deliveryTime: '4:00 PM',
      date: '2024-09-15',
      location: '456 Elm St',
    },
    {
      id: '3',
      products: [
        {
          productImages: [
            'https://static.wixstatic.com/media/c7c732_8edaf45da9e649d2843abc06986fff6d~mv2.jpg/v1/fill/w_520,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7c732_8edaf45da9e649d2843abc06986fff6d~mv2.jpg',
          ],
          productName: 'Pisini (Boiled Rice) - 500g',
          price: '$15.00',
        },
      ],
      deliveryTime: '4:00 PM',
      date: '2024-08-10',
      location: '456 Elm St',
    },
  ];

  const filteredOrders = orders.filter(order =>
    order.products.some(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleOrderClick = (order) => {
    navigation.navigate('OrderSummary', { order });
  };

  const renderProductImages = (images) => {
    if (images && images.length > 1) {
      return (
        <Swiper
          style={{ height: 100, width: screenWidth * 0.3 }}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2}
          loop={true}
          activeDotColor="#000"
          horizontal={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              defaultSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqel-0YFeoe8V3uwnjCtcenZPOu-Aa6KUxg&s' }}
              style={styles.productImage}
            />
          ))}
        </Swiper>
      );
    } else if (images.length === 1) {
      return <Image source={{ uri: images[0] }} style={styles.productImage} />;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Orders</Text>
      </View>

      <TextInput
        style={styles.searchBox}
        placeholder="Search your product"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filteredOrders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOrderClick(item)}>
            <View style={styles.orderItem}>
              <FlatList
                data={item.products}
                keyExtractor={(product, index) => index.toString()}
                renderItem={({ item: product }) => (
                  <View style={styles.productItem}>
                    {renderProductImages(product.productImages)}
                    <View style={styles.orderDetails}>
                      <Text style={styles.deliveryInfo}>
                        <Text style={styles.boldText}>Delivered on </Text>
                        <Text>{`${item.date} at ${item.deliveryTime} to ${item.location}`}</Text>
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 15,
  },
  header: {
    backgroundColor: '#D0F3C4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  deliveryInfo: {
    fontSize: 14,
    color: '#666',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default OrdersScreen;
