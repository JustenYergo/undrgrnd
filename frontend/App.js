import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-ico-material-design';
import { StatusBar } from 'expo-status-bar';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
// importing rative native paper
import { onAuthStateChanged } from 'firebase/auth';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './app/screens/home/HomeScreen';
import { InterestSurvey } from './app/screens/home/InterestSurvery';
import { LoginScreen } from './app/screens/login/LoginScreen';
import { SignupScreen } from './app/screens/signup/SignupScreen';
import { fbauth } from './components/firebaseConfig';
import * as Location from 'expo-location';
import { DetailsScreen } from './app/screens/home/DetailsScreen';
import { FilterScreen } from './app/screens/home/FilterScreen';
import Tabs from './components/containers/Tabs';



const Stack = createNativeStackNavigator();


export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Error getting location')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider>
        <Tabs />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});