import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123 456 789',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg', 
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
      </View>

    
      <View style={styles.body}>
        <TouchableOpacity style={styles.option}>
          <Ionicons  size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons  size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons  size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons  size={24} color="#4CAF50" />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

     
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 1,
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
  header: {
    backgroundColor: '#4CAF50',
    width: '100%',
    paddingTop: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  phone: {
    fontSize: 16,
    color: '#fff',
  },
  body: {
    marginTop: 20,
    width: '90%',
  },
  option: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    width: '90%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
