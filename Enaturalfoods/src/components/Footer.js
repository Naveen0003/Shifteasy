
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={30} color="#1E5703" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Ionicons name="heart-outline" size={30} color="#1E5703" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={25} color="#1E5703"  style={styles.iconMargin} />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={25} color="#1E5703" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={30} color="#1E5703" />
      </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
 
});

export default Footer;
