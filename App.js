import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getData, storeData } from './components/StorageHelper';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import {AppRegistry} from 'react-native';


const HAS_LAUNCHED = "HAS_LAUNCHED";
const Stack = createNativeStackNavigator();

export default function App() {

  const [hasLanuched, setHasLaaunched] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
        const hasLanuched = await getData(HAS_LAUNCHED)
        if (hasLanuched) {
          setHasLaaunched(false); // test true
        } else {
          await storeData(HAS_LAUNCHED, "false"); // test true
        }
    }
    
    getStatus().catch((error) => {console.log(error)});
    
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={hasLanuched ? "HomeScreen" : "WelcomeScreen"}>
        <Stack.Screen name = "WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name = "SettingsScreen" component={SettingsScreen} options={{headerShown: false}}/>
        <Stack.Screen name = "HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

