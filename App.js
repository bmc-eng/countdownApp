import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Created pages & Components
import StartScreen from './pages/startscreen';
import ResultScreen from './pages/resultsscreen';

export default function App() {

  const [returnedWords, setReturnedWords] = useState({})
  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  // This needs to be changed based on the Load Balancer address set up with the REST API
  const url = "http://countdownLB-470762547.eu-west-2.elb.amazonaws.com:3000/words/";

  function getWords(letters) {
    const lettersList = url + letters.join(";")
    console.log(lettersList.toLowerCase())
    const dictionary = () => {
      return fetch(lettersList.toLowerCase())
        .then(response => response.json())
        .then(json => {
          setReturnedWords(json)
          setModalIsVisible(true)
          console.log(json)
        })
        .catch(error => {
          console.error(error);
        });
    }
    dictionary()
  }

  function closeResultsHandler() {
    setModalIsVisible(false)
  }

  return (
    <View style={styles.container}>
      {modalIsVisible && <ResultScreen visible={modalIsVisible} dictionary={returnedWords} onCancel={closeResultsHandler}/>}
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
