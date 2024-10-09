import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryScroll from './CategoryScroll';
import BestSelling from '../components/bestSellingProducts';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <CategoryScroll />
        <BestSelling />
        
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  categoriesScroll: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIcon: {
    width: 70,
    height: 50,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
