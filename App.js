import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigations from "./src/navigations";
import { useFonts } from 'expo-font'
import AppLoading from "expo-app-loading";




export default function App() {

  const [fontsLoaded] = useFonts({
    'QuickSand': require('./assets/fonts/Quicksand-Regular.ttf'),
    'QuickSandBold': require('./assets/fonts/Quicksand-Bold.ttf'),
  })

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <Navigations />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
