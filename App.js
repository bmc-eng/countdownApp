import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Created pages & Components
import StartScreen from './pages/startscreen';
import ResultScreen from './pages/resultscreen';

export default function App() {

  const [returnedWords, setReturnedWords] = useState({})
  const [modalIsVisible, setModalIsVisible] = useState(false)

  // This needs to be changed based on the Load Balancer address set up with the REST API
  const url = "http://countdownLB-470762547.eu-west-2.elb.amazonaws.com:3000/words/";
  const dictionary_test = { "definitions": ["1. Relating to the stars. 2. (Astrol.)  Affecting unfavorably by the supposed influence of the stars; baleful. \"Sideral blast.\" Milton.", "See Grizzled.", "Fortified with a fraise.", "Easily broken; brittle; frail; delicate; easily destroyed. The state of ivy is tough, and not fragile. Bacon. Syn. -- Brittle; infirm; weak; frail; frangible; slight. -- Frag\"ile*ly, adv.", "See Slidder. [Obs.] Chaucer.1. One who, or that which, slides; especially, a sliding part of an instrument or machine. 2. (Zoöl.)  The red-bellied terrapin (Pseudemys rugosa). [Local, U. S. ] Slider pump, a form of rotary pump."], "dictionary": ["sideral", "grisled", "fraised", "fragile", "slider"], "userLetters": ["s", "f", "g", "i", "e", "a", "r", "d", "l"] }
  

  function getWords(letters) {
    const lettersList = url + letters.join(";")
    console.log(lettersList.toLowerCase())
    const dictionary = () => {
      return fetch(lettersList.toLowerCase())
        .then(response => response.json())
        .then(json => {
          setReturnedWords(json)
          setModalIsVisible(true)
          
        })
        .catch(error => {
          console.error(error);

          const test = dictionary_test.definitions.map((definition, i) => {
            return ({'definition': definition, 'word': dictionary_test.dictionary[i], 'id': i})})
          console.log(test)
          // used for testing
          setReturnedWords(test)

          setModalIsVisible(true)
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
