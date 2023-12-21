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
                <Image style={styles.image} source={require('../assets/images/countdown.png')} />
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
        flex: 1,
        justifyContent:'center',
        padding:20
        
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