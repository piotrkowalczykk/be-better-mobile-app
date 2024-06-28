import { Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import { getData } from '../components/StorageHelper';
import { useEffect, useState } from 'react';
import DefaultImage from '../assets/user.png'

export default function HomeScreen(){

    const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
    const [username, setUsername] = useState('');
    const [userAvatar, setUserAvatar] = useState(DEFAULT_IMAGE)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const storedUsername = await getData('USERNAME');
                const storedUserAvatar = await getData('USERAVATAR')
                setUsername(storedUsername);
                setUserAvatar(storedUserAvatar);
                console.log(userAvatar)
            } catch (error) {
                console.log(error)
            }
        }
        getUserData();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Image source={{uri: userAvatar}} style={styles.avatar} />
            <Text>{username}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgorundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 100,
        width: 100
    }
})