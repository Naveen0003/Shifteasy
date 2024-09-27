import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useFonts as usePlayfairFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';

const backgroundImage = require('../../assets/images/millets2.jpg'); 

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
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to!!!</Text>
        <Text style={styles.brandName}>
          <Text style={styles.brandLetter}>E</Text> NaturalFoods
        </Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Login')}  
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    paddingTop: 400,
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular', 
  },
  brandName: {
    fontSize: 40,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginBottom: 1,
    fontFamily: 'PlayfairDisplay_700Bold', // Use Playfair Display font
  },
  brandLetter: {
    fontSize: 70,
    fontWeight: '500',
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
