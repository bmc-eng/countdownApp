import { useState } from 'react'
import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import LetterHolder from '../components/letterholder'
import PrimaryButton from '../components/primarybutton'


function StartScreen() {

    const [listOfLetters, setListOfLetters] = useState([''])

    function startCountdownHandler() {

    }

    return (
        <SafeAreaView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/countdownTitle.png')} />
            </View>
            <View style={styles.mainContainer}>
                <LetterHolder />
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={startCountdownHandler}>Start Countdown</PrimaryButton>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1
    },
    image: {
        width: 290,
        height: 190,
        margin: 20,
        marginHorizontal: 80,
        justifyContent: 'center'
    },
    mainContainer: {
        flex: 6
    },
    buttonContainer: {
        marginHorizontal: 60,
        marginTop: 20
    }

})

export default StartScreen