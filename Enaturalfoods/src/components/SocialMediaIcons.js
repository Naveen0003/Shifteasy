// src/components/SocialMediaIcons.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SocialMediaIcons = () => {
  return (
    <View style={styles.socialMediaFooter}>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="facebook" size={25} color="#3b5998" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="instagram" size={25} color="#C13584" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="youtube" size={25} color="#FF0000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="google" size={25} color="#db4a39" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialMediaFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default SocialMediaIcons;
