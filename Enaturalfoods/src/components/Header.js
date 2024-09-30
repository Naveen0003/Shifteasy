// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, onSearchToggle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>E-naturalfoods!!!</Text>
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
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#4CAF50',
    borderRadius:20,
  },
  headerTitle: {
    fontSize: 34,
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
