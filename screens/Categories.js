import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyButton from '../components/Mybutton';
import BackButton from '../components/Backbutton';

export default function Categories({ navigation }) {
  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryProducts', { category });
  };

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.text}>
        Shop by Categories
      </Text>
      <View style={styles.buttonContainer}>
        <MyButton
          title="Hoodies"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/hoodie.jpg')}
          forwardIcon="arrow-right"
          onPress={() => handleCategoryPress('Hoodies')}
        />
        <MyButton
          title="Pants"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/pants.jpg')}
          forwardIcon="arrow-right"
          onPress={() => handleCategoryPress('Pants')}
        />
        <MyButton
          title="Shoes"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/shoes.png')}
          forwardIcon="arrow-right"
          onPress={() => handleCategoryPress('Shoes')}
        />
        <MyButton
          title="Bags"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/bags.jpg')}
          forwardIcon="arrow-right"
          onPress={() => handleCategoryPress('Bags')}
        />
        <MyButton
          title="Accessories"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/glasses.jpg')}
          forwardIcon="arrow-right"
          onPress={() => handleCategoryPress('Accessories')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'flex-start',
    marginVertical: 20,
    marginLeft: 30,
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