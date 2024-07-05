
import { Text, SafeAreaView, StyleSheet, Image, View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { getData } from '../components/StorageHelper';
import React, { useEffect, useState } from 'react';
import DefaultImage from '../assets/user.png'
import DateNavigator from '../components/DateNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { clearTable, createTable, getAllRows, openDatabase, deleteData } from '../components/Database';
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'

export default function HomeScreen(){

    const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
    const [username, setUsername] = useState('');
    const [userAvatar, setUserAvatar] = useState(DEFAULT_IMAGE);
    const [tasksList, setTasksList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        setTasksList(rows);
        setIsLoading(false);
    }

    const deleteTask = async (id) => {
        const db = await openDatabase();
        await deleteData(db, id)
        const updatedTasks = tasksList.filter(task => task.id !== id);
        setTasksList(updatedTasks);
    }

    useEffect(() => {
        getUserData();
        startDb();
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            startDb();
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.calendar}>
                <DateNavigator />
            </View>
            <Image style={styles.img} source={require('../assets/test.png')} />
            {/* <Image source={{uri: userAvatar}} style={styles.avatar} />
            <Text>{username}</Text> */}
            <View style={styles.tasksContainer}>
                    {isLoading ? 
                        ( <ActivityIndicator size="large" color="#fff"/> ) :
                        ( 
                            <FlatList style={styles.tasksList}
                            data={tasksList}
                            renderItem={({ item }) => {
                            return (
                            <View style={styles.card} key={item.id}>
                                <Text style={styles.cardText}>{item.name}</Text>
                                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                    <MaterialIcons name='check' color='#d2d9d8' size={wp('6%')}/>
                                </TouchableOpacity>
                            </View> )}}
                            />
                        )
                    }  
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
    },
    tasksList: {
        width: '80%'
    },
    card: {
        width: '100%',
        borderRadius: 15,
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#211e1e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    cardText: {
        color: 'white'
    }
})