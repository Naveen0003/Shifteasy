import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useFonts as usePlayfairFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';

const backgroundImage = require('../../assets/images/WhatsApp Image 2024-10-02 at 15.00.46_ff471d7f.jpg'); 


const WelcomeScreen = ({ navigation }) => {
  const [montserratLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const [playfairLoaded] = usePlayfairFonts({
    PlayfairDisplay_700Bold,
  });

  if (!montserratLoaded || !playfairLoaded) {
    return <View />;
  }

  return (
    <ImageBackground
      source={backgroundImage} 
      style={styles.background}
    >
     <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}  
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 600,
  },
  buttonText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
