import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password for:', email);
    setEmail('');
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter the email address associated with your account, and we'll send a link to reset your password.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Send Reset Link</Text>
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
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
  resetButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
