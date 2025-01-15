import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BackButton from '../components/Backbutton';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'Product 1', price: '$20.00', image: require('../assets/hoodie.jpg') },
  { id: '2', name: 'Product 2', price: '$25.00', image: require('../assets/hoodie1.jpg') },
  { id: '3', name: 'Product 3', price: '$30.00', image: require('../assets/hoodie2.jpg') },
  { id: '4', name: 'Product 4', price: '$35.00', image: require('../assets/hoodie3.jpg') },
  { id: '5', name: 'Product 5', price: '$40.00', image: require('../assets/hoodie4.jpg') },
  { id: '6', name: 'Product 6', price: '$20.00', image: require('../assets/hoodie5.jpg') },
  { id: '7', name: 'Product 7', price: '$25.00', image: require('../assets/hoodie6.jpg') },
  { id: '8', name: 'Product 8', price: '$30.00', image: require('../assets/hoodie7.jpg') },
  { id: '9', name: 'Product 9', price: '$35.00', image: require('../assets/hoodie8.jpg') },
  // Add more products as needed
];

export default function CategoryProducts({ navigation, route }) {
  const { category } = route.params;

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />
  );

  const ItemSeparator = () => <View style={{ height: 20 }} />;

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.header}>{category}</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    marginLeft: 10,
    marginTop: 100,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'flex-start',
  },
  list: {
    justifyContent: 'center',
  },
});