import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    }
})