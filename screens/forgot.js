import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import MyButton from '../components/Mybutton';
 
export default function Forgot({ navigation }) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.text}>Forgot Password</Text>
          <View style={styles.container1}>
            {/* Email Address Input */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor={'#ddd'}
            />
            {/* Submit Button */}
            <MyButton
              title="Continue"
              onPress={() => navigation.navigate('Sent')}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        marginTop: 70,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 32,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '90%',
        borderColor: '#ddd',
        borderRadius: 5,
    },
    button: {
        marginTop: 20,
        width: 344,
        borderRadius: 30,
        backgroundColor: '#8E6CEF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },


});