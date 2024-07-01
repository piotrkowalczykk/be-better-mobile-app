import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
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
    <View style={styles.container}>
        <Text style={styles.day}>{dayOfWeek}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <TouchableOpacity onPress={handlePrevDay}>
            <Text>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextDay}>
            <Text>{">"}</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: wp('2%')
    },
    day: {
        fontSize: wp('8%'),
    }
})