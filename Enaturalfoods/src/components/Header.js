// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, onSearchToggle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Enaturalfoods!!!</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={onSearchToggle}>
          <Ionicons name="search-outline" size={25} color="white" style={styles.iconMargin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" size={25} color="white" style={styles.iconMargin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={25} color="white"  style={styles.iconMargin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop:30,
   
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:50,
  },
  iconMargin: {
    marginRight: 15,
    paddingTop: 30,
    
  },
});

export default Header;
