import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SocialMediaIcons from '../components/SocialMediaIcons'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);  

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    navigation.navigate('Details');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/987eccdc-f81e-4c50-a566-03910355abde.jpeg')} 
        style={styles.headerImage}
        resizeMode="contain"
      />

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

      <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.continueWithText}>Continue with</Text>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <SocialMediaIcons />

      <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
        Not a Member? <Text style={styles.registerText}>Register Now</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F6F6F6',  
  },
  headerImage: {
    width: 150, 
    height: 150, 
    marginBottom: 30,
   
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'black',
    textAlign: 'right',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#1E5703',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 1,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueWithText: {
    marginVertical: 20,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  signupLink: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  registerText: {
    color: '#1E5703', 
    fontWeight: 'bold',
  },
});

export default LoginScreen;
