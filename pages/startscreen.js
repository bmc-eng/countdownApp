import { useState } from 'react'
import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import LetterHolder from '../components/letterholder'
import PrimaryButton from '../components/primarybutton'


function StartScreen() {
    const emptyLetters = [{ letterId: 0, letter: '' },
    { letterId: 1, letter: '' },
    { letterId: 2, letter: '' },
    { letterId: 3, letter: '' },
    { letterId: 4, letter: '' },
    { letterId: 5, letter: '' },
    { letterId: 6, letter: '' },
    { letterId: 7, letter: '' },
    { letterId: 8, letter: '' }]

    const [listOfLetters, setListOfLetters] = useState(emptyLetters)

    function updateLetters(enteredText) {
        console.log("Text from App: " + JSON.stringify(enteredText))
        const filteredLetters = listOfLetters.filter((box) => box.letterId === enteredText.letterId ? false: true)
        const addedLetters = [...filteredLetters, enteredText]
        const sortedLetters = addedLetters.sort((a,b) => {
            var x = a.letterId; var y = b.letterId;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
        setListOfLetters(sortedLetters)

    }

    function startCountdownHandler() {
        console.log(listOfLetters)
    }

    function resetHandler() {
        setListOfLetters(emptyLetters)
        console.log("reset pressed")
    }

    return (
        <SafeAreaView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/countdown.png')} />
            </View>
            <View style={styles.mainContainer}>
                <LetterHolder
                    letters={listOfLetters}
                    updateLetters={updateLetters}
                />
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={startCountdownHandler}>Countdown!</PrimaryButton>
                    <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20

    },
    image: {
        width: 400,
        height: 60,


    },
    mainContainer: {
        flex: 8
    },
    buttonContainer: {
        marginHorizontal: 60,
        marginTop: 20
    }

})

export default StartScreen