import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MyButton from '../components/Mybutton';
import Lottie from 'lottie-react-native';

export default function Signup({ navigation }) {
    return(
        <View style={styles.container}>
            <Lottie style={styles.img}
                source={require('../assets/animation/bell.json')}
                autoPlay
                loop = {false}/>

            <Text style={styles.text}>No Notification yet</Text>
            <MyButton 
                title="Explore Categories"
                onPress={() => navigation.navigate('Categories')}
                style={styles.button}
                textStyle={styles.buttonText}
            />
        </View>
    );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#8E6CEF',
        borderRadius: 30,
        width: 185,
        height: 52
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'center',}

 })