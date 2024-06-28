import { useState } from "react";
import { TouchableOpacity, SafeAreaView, Text, StyleSheet, View, Image, ImageBackground, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Button, Alert } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { storeData } from "../components/StorageHelper";
import * as ImagePicker from 'expo-image-picker';
import DefaultImage from '../assets/user.png'

export default function SettingsScreen({navigation}){

    const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
    const [name, setName] = useState('');
    const [image, setImage] = useState(DEFAULT_IMAGE);

    const selectAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            width: 200,
            height: 200
        })
        if (!result.canceled){
            setImage(result.assets[0].uri);
        }
    }

    const saveHandler = () => {
        if (name.trim() !== "" && name.length <= 12){
            storeData('USERNAME', name.toString());
            storeData('USERAVATAR', image.toString());
            navigation.navigate('HomeScreen');
        } else {
            Alert.alert('Invalid name', 'Name cannot be empty and can have a maximum of 12 characters')
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}} enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <View style={styles.innerImgContainer}>
                <ImageBackground style={styles.userAvatar} resizeMode='contain' source={{uri: image}} />
                </View>
            <TouchableOpacity style={styles.selectAvatarBtn} onPress={selectAvatar}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{name}</Text>
                <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#6e6e6e" onChangeText={(val) => setName(val)} maxLength={12}></TextInput>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => saveHandler()}>
                <Text style={styles.btnText}>SAVE</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 60
    },
    innerImgContainer: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    userAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
    username: {
        marginTop: 20,
        color: '#f8df08',
        textAlign: 'center',
        letterSpacing: 2,
        height: wp('8%'),
        fontSize: wp('8%'),
        lineHeight: 30
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
    },
    selectAvatarBtn: {
        backgroundColor: '#04de13',
        width: wp('15%'),
        height: wp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        bottom: -10,
        right: 5,
        zIndex: 1
    },
    buttonText: {
        fontSize: wp('5%'),
        color: 'white'
    },
    btnText: {
        fontSize: wp('10%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        fontWeight: 'bold',
        letterSpacing: 2
    },
    btn: {
        backgroundColor: '#f8df08',
        width: wp('60%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('10%'),
        marginTop: 70
    },
})