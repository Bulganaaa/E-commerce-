import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ProductCard = ({ product,navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ProductDetail")}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
        <Icon name="heart" size={20} color={isFavorite ? "#FA3636" : "#ddd"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    height:80,
    padding: 10,
    backgroundColor: "#F4F4F4", 
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "black",
    fontWeight: 'bold'
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default ProductCard;