import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function WelcomeScreen(){

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require('../assets/logo.png')}></Image>
            <Text style={styles.paragraph}>
                Welcome to Be Better! I'm so glad you downloaded my app.
                Here you will find the tools to achieve your goals and
                become the best version of yourself. Good Luck!</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>START</Text>
            </TouchableOpacity>
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
    img:{
        width: wp('70%'),
        resizeMode: 'contain',
        margin: -100
    },
    paragraph: {
        fontSize: wp('5%'),
        color: '#d2d9d8',
        textAlign: 'center',
        lineHeight: 25,
        width: wp('80%')
    },
    btn: {
        marginTop: 60,
        backgroundColor: '#f8df08',
        width: wp('60%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('10%'),
    },
    btnText: {
        fontSize: wp('10%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        fontWeight: 'bold',
        letterSpacing: 2
    }
})