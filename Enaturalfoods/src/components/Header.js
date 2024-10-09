import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png' }} 
          style={styles.avatar}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Priya</Text>
          <Text style={styles.locationText}>Chennai</Text>
        </View>
        {/* Notification Icon on the Right Side */}
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={25} color="#1E5703" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#1E5703" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="Search Your category"
          placeholderTextColor="black"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#D0F3C4',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between', 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileDetails: {
    marginRight: 200,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  locationText: {
    color: 'black',
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    width: '90%', 
    alignSelf: 'center', 
    marginTop: 30, 
    paddingHorizontal: 10,
    paddingVertical: 1, 
  },
  searchIcon: {
    marginRight: 10,
    color: '#1E5703',
  },
  searchBox: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 1,
    paddingVertical: 7,
  },
  iconContainer: {
    paddingLeft: 1, 
  },
});

export default Header;
