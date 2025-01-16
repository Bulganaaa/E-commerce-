import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import MyButton from '../components/Mybutton';
import { useAuth } from '../context/AuthContext';

export default function Profile({navigation}) {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "000-000-000",
    address: "123 Main St, Cityville, ABC",
    profilePic: require('../assets/profile.jpg'), 
  };
    const { signOut } = useAuth();
  
    const handleSignOut = () => {
      signOut();
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user.profilePic} style={styles.profilePic} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.editAddress}>
          <View style={styles.infos}>
          <Text style={styles.infoname}>{user.name}</Text>
          <Text style={styles.addressText}>{user.email}</Text>
          <Text style={styles.addressText}>{user.phone}</Text>
          </View>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <MyButton title="Address" onPress={() => navigation.navigate('EditAddress')} style={styles.buttons} textStyle={styles.buttontext}/>
        <MyButton title="Wishlist" onPress={() => navigation.navigate('Wishlist')} style={styles.buttons} textStyle={styles.buttontext}/>
        <MyButton title="Payment" onPress={() => navigation.navigate('Payment')} style={styles.buttons} textStyle={styles.buttontext}/>
        <MyButton title="Help" onPress={() => navigation.navigate('Help')} style={styles.buttons} textStyle={styles.buttontext}/>
        <MyButton title="Support" onPress={() => navigation.navigate('Support')} style={styles.buttons} textStyle={styles.buttontext}/>
      </View>

      <Text style={styles.logout} onPress={handleSignOut}>Sign Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  editAddress: {
    height: 96,
    width: 342,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft:20,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  addressText: {
    fontSize: 16,
    color: '#555',
  },
  editText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#8E6CEF',
  },
  buttonsContainer: {
    marginBottom: 30,
  },
  logout: {
    fontWeight:'bold',
    fontSize: 16,
    color: '#E74C3C',
    textAlign: 'center',
    marginTop: 20,
  },
  buttons:{ 
    marginTop:8,
    width:342,
    height:56,
    justifyContent: "flex-start",
    backgroundColor: "#F4F4F4"
  },
  buttontext:{
    color:"black",
    fontWeight: "semibold"
  },
    infoname:{
      fontWeight: 'bold',
      fontSize: 16

    },

  infos:{
    justifyContent: 'space-between'
  }
});
