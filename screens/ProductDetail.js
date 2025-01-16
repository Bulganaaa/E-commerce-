import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function ProductDetail(){
  
    return (
      <View style={styles.container}>
        <Text> Product detail </Text>
      </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})