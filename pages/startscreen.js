import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import LetterBox from '../components/letterbox'
import LetterHolder from '../components/letterholder'


function StartScreen() {
    return (
        <SafeAreaView>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/countdownTitle.png')}/>
        </View>
        <View style={styles.mainContainer}>
            <LetterHolder />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex:1
    },
    image: {
        width: 290,
        height: 190,
        margin: 20,
        marginHorizontal:80,
        justifyContent: 'center'
    },
    mainContainer: {
        flex: 7
    }
})

export default StartScreen