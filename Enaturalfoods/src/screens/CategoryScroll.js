import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { id: 1, name: 'Rice', image: 'https://img.freepik.com/premium-photo/raw-rice-grain-dry-rice-plant-wooden-table_641010-27413.jpg' },
  { id: 2, name: 'Sweets', image: 'https://media.istockphoto.com/id/507796111/photo/pakistani-mithai-4.jpg?s=612x612&w=0&k=20&c=9YtvQ9huwpI_zkCH1xEzD12YbiJfiCw-L0aoaPup8Hg=' },
  { id: 3, name: 'Dry fruits', image: 'https://media.istockphoto.com/id/183803376/photo/mixed-nuts-and-dried-fruits.jpg?s=612x612&w=0&k=20&c=C7BlDHRlNQMTCMrAWcCg59PaA18bAuGXVcU0estWhGY=' },
  { id: 4, name: "Millet's", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzZ11nUntePncgl2B3VgamHLtHXr3RwRjDg&s' },
  { id: 5, name: 'Health mix', image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/393875314/TZ/XD/LM/214460477/sathu-maavu-homemade-health-mix-nutrient-rich-baby-food-jpg-500x500.jpg' },
];

const CategoryScroll = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.imageBackground}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#00A36C',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageBackground: {
    width: 75,
    height: 75,
    borderRadius: 25,
    backgroundColor: '#D0F3C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CategoryScroll;
