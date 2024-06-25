import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function WelcomeScreen(){

    return (
        <SafeAreaView style={styles.container}>
            <Text>Elo</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    }
})