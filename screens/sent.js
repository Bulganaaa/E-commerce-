import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MyButton from '../components/Mybutton';
import Lottie from 'lottie-react-native';

export default function Signup({ navigation }) {
    return(
        <View style={styles.container}>
            <Lottie style={styles.img}
                source={require('../assets/animation/email.json')}
                autoPlay
                loop = {false}/>

            <Text style={styles.text}>We Sent you an Email to reset</Text>
            <Text style={styles.text}>your password</Text>
            <MyButton 
                title="Return to Login"
                onPress={() => navigation.navigate('Login')}
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
        width: 159,
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