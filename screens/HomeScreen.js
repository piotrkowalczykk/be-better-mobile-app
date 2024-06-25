import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function HomeScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <Text>piter</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgorundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    }
})