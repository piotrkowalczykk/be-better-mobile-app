import { SafeAreaView, Text, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react";
import { insertData, createTable, openDatabase } from "../components/Database";

export default function AddHabitScreen(){

    const [taskTitle, setTaskTitle] = useState('');

    const addTask = async () => {
        const db = await openDatabase();
        await insertData(db, taskTitle);
        setTaskTitle('');
    }

    const clearFields = () => {
        setTaskTitle('');
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={clearFields}>
                    <MaterialIcons name='delete' color='#d2d9d8' size={wp('8%')}/>
                </TouchableOpacity>
                <Text style={styles.logo}>New task</Text>
                <TouchableOpacity onPress={addTask} >
                    <MaterialIcons name='add-task' color='#d2d9d8' size={wp('8%')} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleLabel}>Title</Text>
                <TextInput style={styles.title} placeholder="Enter task name" placeholderTextColor="#6f6f6f" value={taskTitle} onChangeText={val => setTaskTitle(val)}/>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#221c1c',
        alignItems: 'center'
    },
    logoContainer: {
        marginTop: wp('6%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    logo: {
        color: '#d2d9d8',
        fontSize: wp('8%'),
    },
    titleContainer: {
        width: wp('80%'),
        marginTop: wp('6%'),
    },
    titleLabel: {
        fontSize: wp('3%'),
        padding: wp('2%'),
        color: '#6f6f6f'
    },
    title: {
        backgroundColor: '#313131',
        borderRadius: 10,
        fontSize: wp('4%'),
        padding: wp('3%'),
        color: '#d2d9d8'
    }
})