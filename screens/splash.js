import React ,{useEffect}from "react";
import { View, StyleSheet} from "react-native";
import Lottie from 'lottie-react-native';

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>
            <Lottie style={styles.img}
                source={require('../assets/animation/splash.json')}
                autoPlay
                loop
            />
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8E6CEF',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img:{
        width: 200,
        height: 200,
        resizeMode: 'center',
    }

});