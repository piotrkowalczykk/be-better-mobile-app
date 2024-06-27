import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image, ImageBackground, TextInput } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SettingsScreen(){

    const [name, setName] = useState('');

    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <ImageBackground style={styles.userAvatar} resizeMode='contain' source={require('../assets/user.jpg')} />
            </View>
            <View style={styles.nicknameContainer}>
                <Text style={styles.username}>{name}</Text>
                <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#6e6e6e" onChangeText={(val) => setName(val)} maxLength={12}></TextInput>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#211e1e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        width: 200,
        height: 200,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userAvatar: {
        width: '100%',
        height: '100%'
    },
    username: {
        marginTop: 20,
        color: '#f8df08',
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: wp('8%')
    },
    input: {
        fontSize: wp('5%'),
        marginTop: 70,
        width: wp('70%'),
        borderBottomWidth: 3,
        borderColor: '#dfdfdf',
        color: '#6e6e6e',
        textAlign: 'center',
        paddingBottom: hp('1%'),
        letterSpacing: 1
    }
})