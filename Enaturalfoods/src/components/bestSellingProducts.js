import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const bestSellingProducts = [
  {
    id: '1',
    name: 'Rice',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'High-quality, long-grain rice perfect for a variety of dishes. \nGreat for pilafs, risottos, and more. \nRich in vitamins and minerals, this rice is a staple for healthy meals. \nExperience the fluffy texture and delicious flavor in every bite.',
    image: 'https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-rice-served-in-a-wooden-bowl-png-image_13067030.png',
  },
  {
    id: '2',
    name: 'Brown Rice',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'Nutritious brown rice, rich in fiber and perfect for health-conscious individuals. \nPacked with antioxidants, this rice supports overall wellness. \nA versatile ingredient that can be used in salads, bowls, and side dishes. \nEnjoy the earthy flavor and chewy texture.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/033/647/327/small_2x/brown-rice-with-ai-generated-free-png.png',
  },
  {
    id: '3',
    name: 'Thinai',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'A traditional millet known for its health benefits and versatility in recipes. \nRich in protein and essential minerals, Thinai is perfect for a balanced diet. \nUse it in porridge, salads, or as a rice substitute. \nEmbrace the nutty flavor and health benefits with every meal.',
    image: 'https://nativpantry.com/wp-content/uploads/2020/08/kambu-laddu-1.jpg',
  },
  {
    id: '4',
    name: 'Yelluurandai',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'Nutty black sesame seeds, ideal for snacks and traditional dishes. \nRich in healthy fats and antioxidants, they promote heart health. \nSprinkle them on salads or mix them into baked goods for added flavor. \nA small but powerful ingredient packed with nutrition.',
    image: 'https://i0.wp.com/florafoods.in/wp-content/uploads/2021/01/Black-Till-Laddu-7-1-2.png?fit=650%2C650&ssl=1',
  },
  {
    id: '5',
    name: 'Dryfruits',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'A mix of assorted dried fruits, perfect for snacking or adding to dishes. \nPacked with vitamins, minerals, and natural sweetness, they are a healthy choice. \nGreat for energy boosts during workouts or long days. \nAdd them to salads, cereals, or enjoy them on their own.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkvgOIO19ZkrsieDo1wi7NvhJPGLJTHqPHlGOyCHaywJRJPJ4sNVfC1-LGH0790rsy8k&usqp=CAU',
  },
  {
    id: '6',
    name: 'Mixed Nuts',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'A delightful blend of crunchy nuts, perfect for healthy snacking. \nPacked with protein and healthy fats, they support heart health. \nEnjoy them as a snack or add them to your favorite recipes for extra crunch. \nA nutritious and satisfying choice for any time of day.',
    image: 'https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-mix-nuts-in-a-white-bowl-dry-fruits-png-image_11920703.png',
  },
  {
    id: '7',
    name: 'Millets',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'Nutritious millets, packed with vitamins and minerals, ideal for healthy meals. \nThese gluten-free grains are versatile and can be used in a variety of dishes. \nRich in fiber, they help promote digestive health. \nA perfect addition to soups, salads, and as a rice substitute.',
    image: 'https://aagaaram.com/wp-content/uploads/2021/08/feature-new.png',
  },
  {
    id: '8',
    name: 'Kodo Millets',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'Kodo millet is a gluten-free grain rich in dietary fiber, perfect for healthy diets. \nPacked with essential nutrients, it supports overall wellness. \nUse it in porridge, pilafs, or as a rice alternative. \nEnjoy its nutty flavor and health benefits in your daily meals.',
    image: 'https://vamshifarms.com/cdn/shop/files/KODO_MILLETS_ARIKELU.png?v=1720110017',
  },
  {
    id: '9',
    name: 'Health Mix',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'A wholesome blend of various grains and lentils, rich in nutrients and flavor. \nPerfect for quick and nutritious meals, it’s a staple for busy lifestyles. \nAdd it to soups, stews, or enjoy it as a porridge. \nA delicious way to boost your nutrient intake.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/WQ/ZG/SM/181687428/health-mix-powder-500x500.png',
  },
  {
    id: '10',
    name: 'Health Mix Powder',
    price: '$20/kg',
    rating: 4.5,
    reviews: '12 Reviews',
    description: 'Convenient health mix powder for easy preparation of nutritious meals. \nJust add water or milk for a quick, healthy snack. \nRich in vitamins and minerals, it’s perfect for any diet. \nA smart choice for busy individuals seeking healthy options.',
    image: 'https://i1.wp.com/suvifoods.in/wp-content/uploads/2020/11/Health-Mix-Image-1.jpg?fit=225%2C225&ssl=1',
  },
];

const BestSelling = () => {
  const navigation = useNavigation(); 

  const handlePress = (item) => {
    
    navigation.navigate('ProductDetails', { product: item });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.name}</Text>

        <View style={styles.productInfo}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productRating}>⭐ {item.rating}</Text>
        </View>

        <View style={styles.productReviewsContainer}>
          <Text style={styles.productReviews}>{item.reviews}</Text>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Best Selling</Text>
      <FlatList
        data={bestSellingProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 1,
    alignSelf: 'center',
    borderRadius: 5,
  },
  detailsContainer: {
    backgroundColor: '#D0F3C4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginBottom: 5,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
  },
  productRating: {
    fontSize: 14,
    color: '#333',
  },
  productReviewsContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 10,
  },
  productReviews: {
    fontSize: 12,
    color: '#999',
  },
  addToCartButton: {
    backgroundColor: '#1E5703',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BestSelling;
