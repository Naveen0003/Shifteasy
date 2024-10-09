import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SocialMediaIcons from '../components/SocialMediaIcons';


const headerImage = require('../../assets/images/987eccdc-f81e-4c50-a566-03910355abde.jpeg'); 

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignup = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('City:', city);
    console.log('Password:', password);

   
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCity('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={headerImage}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="black"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}  
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>

      <SocialMediaIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#F6F6F6', 
  },
  headerImage: {
    width: '100%',
    height: 100, 
    marginBottom: 20, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 30,
    color: 'black',
    textAlign: 'center',
  },
});

export default SignupScreen;
