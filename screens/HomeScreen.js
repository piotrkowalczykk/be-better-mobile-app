import { Text, SafeAreaView, StyleSheet, Image, View} from 'react-native';
import { getData } from '../components/StorageHelper';
import { useEffect, useState } from 'react';
import DefaultImage from '../assets/user.png'
import DateNavigator from '../components/DateNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createTable, getAllRows, insertData, openDatabase } from '../components/Database';

export default function HomeScreen(){

    const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
    const [username, setUsername] = useState('');
    const [userAvatar, setUserAvatar] = useState(DEFAULT_IMAGE)

    const getUserData = async () => {
        try {
            const storedUsername = await getData('USERNAME');
            const storedUserAvatar = await getData('USERAVATAR')
            setUsername(storedUsername);
            setUserAvatar(storedUserAvatar);
        } catch (error) {
            console.log(error)
        }
    }

    const startDb = async () => {
        const db = await openDatabase();
        await createTable(db);
        const rows = await getAllRows(db);
    }


    useEffect(() => {
        getUserData();
        startDb();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.calendar}>
                <DateNavigator />
            </View>
            <Image style={styles.img} source={require('../assets/test.png')} />
            {/* <Image source={{uri: userAvatar}} style={styles.avatar} />
            <Text>{username}</Text> */}
            <View style={styles.tasksContainer}>
                <Text>,,,</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        margin: 0,
        backgroundColor: '#221c1c',
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        height: 100,
        width: 100
    },
    img: {
        resizeMode: 'contain',
        margin: 0,
        width: '100%',
        height: 248,
        backgroundColor: '#2c2626',
        aspectRatio: 2/1

    },
    tasksContainer: {
        margin: 0,
        flex: 1,
        width: wp('100%'),
        backgroundColor: '#2c2626',
        alignItems: 'center'
    }
})