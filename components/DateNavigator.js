import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DateNavigator(){

    const [currentDay, setCurrentDay] = useState(new Date());

    const dayOfWeek = currentDay.toLocaleDateString(undefined, {weekday: 'long'});
    const formattedDate = String(currentDay.getDate()) + " " + String(currentDay.toLocaleString(undefined ,{month:'short', year:'numeric'}));

    const handlePrevDay = () => {
        setCurrentDay(prevDate => {
            const prevDay = new Date(prevDate);
            prevDay.setDate(prevDay.getDate() - 1);
            return prevDay;
        })
    }

    const handleNextDay = () => {
        setCurrentDay(nextDate => {
            const nextDay = new Date(nextDate);
            nextDay.setDate(nextDay.getDate() + 1);
            return nextDay;
        })
    }


    return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handlePrevDay}>
            <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <View style={styles.innerContainer}>
            <Text style={styles.day}>{dayOfWeek}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <TouchableOpacity onPress={handleNextDay}>
            <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#221c1c'
    },
    innerContainer: {
        padding: wp('2%'),
        paddingBottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    day: {
        fontSize: wp('8%'),
        color: '#d2d9d8'
    },
    date: {
        padding: 0,
        color: '#d2d9d8'
    },
    arrow: {
        color: 'white',
        fontSize: wp('8%'),
        padding: wp('4%'),
        paddingTop: wp('6%'),
        paddingBottom: 0,
    }
})