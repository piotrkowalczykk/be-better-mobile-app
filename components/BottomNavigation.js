import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from '../screens/SettingsScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import HomeScreen from '../screens/HomeScreen';
import { StyleSheet, View, Text, StatusBar} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(){
    return (
        <>
        <StatusBar hidden backgroundColor="lightgreen"/>
        <Tab.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'yellow'},
            tabBarStyle: styles.container,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.icon}>
                            <AntDesign name='home' size={30} color='#d2d9d8'/>
                            <Text style={styles.textIcon}>Home</Text>
                        </View>)}}}
            />
            <Tab.Screen name="Add" component={AddHabitScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.addBtn}>
                            <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>+</Text>
                        </View>)}}}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.icon}>
                            <Feather name='settings' size={30} color='#d2d9d8'/>
                            <Text style={styles.textIcon}>Settings</Text>
                        </View>)}}}
            />
        </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#211e1e',
        position: 'absolute',
        height: 70,
        overflow: 'visible',
        elevation: 0,
        paddingBottom: 0,
        borderTopColor: 'black',
    },
    icon: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon: {
        color: '#d2d9d8'
    },
    addBtn: {
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: 100,
        backgroundColor: '#f8df08',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    }
})