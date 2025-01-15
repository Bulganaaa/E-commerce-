import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import Icono from 'react-native-vector-icons/Feather';
import ProductCard from '../components/ProductCard'; // Ensure this import is correct

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('Men');

  const categories = [
    { id: '1', name: 'Hoodies', image: require('../assets/hoodie.jpg') },
    { id: '2', name: 'Shorts', image: require('../assets/pants.jpg') },
    { id: '3', name: 'Shoes', image: require('../assets/shoes.png') },
    { id: '4', name: 'Bag', image: require('../assets/bags.jpg') },
    { id: '5', name: 'Accessories', image: require('../assets/glasses.jpg') },
  ];

  const topSelling = [
    { id: '1', name: "Men's Harrington Jacket", price: '$148.00', image: require('../assets/hoodie.jpg') },
    { id: '2', name: "Max Cirro Men's Slides", price: '$55.00', image: require('../assets/shoes.png') },
    { id: '3', name: "Shoes 37", price: '$66.00', image: require('../assets/pants.jpg') },
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/profile.jpg')} style={styles.profilePic} />
        <View style={styles.dropdownContainer}>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedGender}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
            >
              <Picker.Item label="Men" value="Men" />
              <Picker.Item label="Women" value="Women" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CartTab')}>
          <View style={styles.iconWrapper}>
            <Icono name="shopping-bag" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
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

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.sectionLink} onPress={()=>navigation.navigate("Categories")}>See All</Text>
        </View>
        <FlatList 
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* Top Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Selling</Text>
          <Text style={styles.sectionLink}>See All</Text>
        </View>
        <FlatList
          data={filterProducts(topSelling)}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => alert(`Clicked on ${item.name}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />

        {/* New In */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: "#8E6CEF" }]}>New In</Text>
          <Text style={styles.sectionLink}>See All</Text>
        </View>
        <FlatList
          data={filterProducts(newIn)}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => alert(`Clicked on ${item.name}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickerWrapper: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: "#F4F4F4",
  },
  picker: {
    height: 40,
    width: 72,
  },
  iconWrapper: {
    backgroundColor: '#8E6CEF',
    borderRadius: 25,
    padding: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: '90%',
    alignSelf: "center",
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingTop: 160,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionLink: {
    fontSize: 14,
    color: "#000",
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
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
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});