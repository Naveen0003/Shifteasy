import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For icons
import SocialMediaIcons from '../components/SocialMediaIcons';

const backgroundImage = require('../../assets/images/larch-conifer-cone-branch-tree-40896.jpg');

const SignupScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);  // State for toggling password visibility

  const handleSignup = () => {
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);

    setFullname('');
    setEmail('');
    setPassword('');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>

       
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
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

        {/* Password input with eye icon */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}  // Conditionally show/hide password
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="black"
          />
          {/* Eye icon to toggle password visibility */}
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

        {/* Social media icons */}
        <SocialMediaIcons />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 140,
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
