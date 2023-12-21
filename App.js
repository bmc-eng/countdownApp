import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Created pages & Components
import StartScreen from './pages/startscreen';

export default function App() {

  const url = "http://countdownLB-1981084321.eu-west-2.elb.amazonaws.com:3000/words/";

  function getWords(letters) {
    const lettersList = url + letters.join(";")
    console.log(lettersList.toLowerCase())
    const dictionary = () => {
      return fetch(lettersList.toLowerCase())
        .then(response => response.json())
        .then(json => {
          console.log(json.dictionary)
        })
        .catch(error => {
          console.error(error);
        });
    }
    dictionary()
  }

  return (
    <View style={styles.container}>
      <StartScreen countdown={getWords} />
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
