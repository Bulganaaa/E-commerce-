import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    }
})