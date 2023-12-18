import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Created pages & Components
import StartScreen from './pages/startscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StartScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B87C4",
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
