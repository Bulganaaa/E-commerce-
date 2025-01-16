import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MyButton from '../components/Mybutton';
import BackButton from '../components/Backbutton';

const categories = [
  { id: '1', name: 'Hoodies', image: require('../assets/hoodie.jpg') },
  { id: '2', name: 'Pants', image: require('../assets/pants.jpg') },
  { id: '3', name: 'Shoes', image: require('../assets/shoes.png') },
  { id: '4', name: 'Bags', image: require('../assets/bags.jpg') },
  { id: '5', name: 'Accessories', image: require('../assets/glasses.jpg') },
];

export default function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryProducts', { category });
  };

  const filterCategories = (categories) => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.searchContainer}>
        <Icon name="search1" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={"#000"}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <Text style={styles.text}>Shop by Categories</Text>
      <FlatList
        data={filterCategories(categories)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MyButton
            title={item.name}
            style={styles.button}
            textStyle={styles.buttonText}
            image={item.image}
            onPress={() => handleCategoryPress(item.name)}
          />
        )}
        contentContainerStyle={styles.buttonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchContainer: {
    marginLeft: 70,
    marginTop: 23,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    width: 290,
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  button: {
    marginTop: 8,
    justifyContent: "space-between",
    width: 342,
    height: 64,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
});