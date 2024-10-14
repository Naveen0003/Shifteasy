import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ChangePasswordScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    
    Alert.alert('Success', 'Password updated successfully!');
   
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Image
        source={require('../../assets/images/987eccdc-f81e-4c50-a566-03910355abde.jpeg')} 
        style={styles.headerImage}
        resizeMode="contain"
      />
        <Text style={styles.heading}>Change Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePassword}>
          <Text style={styles.updateButtonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  card: {
    width: width * 0.9,
    padding: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  updateButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
