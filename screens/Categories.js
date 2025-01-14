import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MyButton from '../components/Mybutton';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.backButtonCircle}>
          <Icon name="chevron-back" size={24} color="#000" />
        </View>
      </TouchableOpacity>
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
        />
        <MyButton
          title="Pants"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/pants.jpg')}
          forwardIcon="arrow-right"
        />
        <MyButton
          title="Shoes"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/shoes.png')}
          forwardIcon="arrow-right"
        />
        <MyButton
          title="Bags"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/bags.jpg')}
          forwardIcon="arrow-right"
        />
        <MyButton
          title="Accessories"
          style={styles.button}
          textStyle={styles.buttonText}
          image={require('../assets/glasses.jpg')}
          forwardIcon="arrow-right"
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonCircle: {
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    padding: 10,
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