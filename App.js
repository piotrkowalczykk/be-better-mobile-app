import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getData, storeData } from './components/StorageHelper';
import WelcomeScreen from './screens/WelcomeScreen';
import BottomNavigation from './components/BottomNavigation';
import SettingsScreen from './screens/SettingsScreen';

const HAS_LAUNCHED = "HAS_LAUNCHED";
const Stack = createNativeStackNavigator();

export default function App() {

  const [hasLaunched, setHasLaunched] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      const launched = await getData(HAS_LAUNCHED)
      if (launched) {
        setHasLaunched(true);
      } else {
        await storeData(HAS_LAUNCHED, "true");
      }
    }
    
    getStatus().catch((error) => { console.log(error) });
    
  }, [])

  return (
    <NavigationContainer>
      {console.log(hasLaunched)}
      <Stack.Navigator>
        {!hasLaunched ? (
          <>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false, gestureEnabled: false}} />
          </>
        ) : (
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false, gestureEnabled: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
