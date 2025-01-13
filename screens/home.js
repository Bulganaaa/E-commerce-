import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {

  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: '1', name: 'Hoodies', image: require('../assets/hoodie.jpg') },
    { id: '2', name: 'Pants', image: require('../assets/pants.jpg') },
    { id: '3', name: 'Shoes', image: require('../assets/shoes.png') },
    { id: '4', name: 'Bags', image: require('../assets/bags.jpg') },
    { id: '5', name: 'Accessories', image: require('../assets/glasses.jpg') },
  ];

  const topSelling = [
    { id: '1', name: 'Product 1', image: require('../assets/hoodie.jpg') },
    { id: '2', name: 'Product 2', image: require('../assets/pants.jpg') },
    { id: '3', name: 'Product 3', image: require('../assets/shoes.png') },
  ];

  const newIn = [
    { id: '1', name: 'New Product 1', image: require('../assets/hoodie.jpg') },
    { id: '2', name: 'New Product 2', image: require('../assets/pants.jpg') },
    { id: '3', name: 'New Product 3', image: require('../assets/shoes.png') },
  ];

  const handleSearchChange = (text) => setSearchTerm(text);

  const filterProducts = (products) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search1" size={20} color="#000" style={styles.searchIcon} />
        <TextInput 
          style={styles.input} 
          placeholder="Search"
          placeholderTextColor={"#000"}
          value={searchTerm}
          onChangeText={handleSearchChange}
        />
      </View>

      <View style={styles.categories}>
        <Text style={{fontSize:20, fontWeight: 'bold'}}>Categories</Text>
        <Text>See All</Text>
      </View>
      
      {/* FlatList for Categories */}
      <FlatList 
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Category clicked')}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Top Selling</Text>
      {/* FlatList for Top Selling Products */}
      <FlatList 
        data={filterProducts(topSelling)}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Product clicked')}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={{fontSize:20, fontWeight:'bold', marginLeft: 10, marginTop:20, marginBottom:15, color:'#8E6CEF'}}>New In</Text>
      {/* FlatList for New In Products */}
      <FlatList 
        data={filterProducts(newIn)}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem} onPress={() => alert('Product clicked')}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  imgcontainer: {
    borderRadius: 30,
    backgroundColor: "#ddd",
  },
  searchContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 342,
    marginVertical: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  productItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  productImage: {
    width: 159,
    height: 220,
    borderRadius: 10,
  },
  categoryImage: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 15
  },
});