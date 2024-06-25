import { useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import { getData, storeData } from './components/StorageHelper';
import WelcomeScreen from './screens/WelcomeScreen';

const HAS_LAUNCHED = "HAS_LAUNCHED";

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
    <>
      {hasLanuched ? <HomeScreen /> : <WelcomeScreen />}
    </>
  );
}

