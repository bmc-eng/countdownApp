import { View, Modal, Text, StyleSheet } from 'react-native'
import ModalButton from '../components/modalbutton'

function ResultScreen({ onCancel, dictionary, visible }) {

    //const dictionary = { "definitions": ["1. Relating to the stars. 2. (Astrol.)  Affecting unfavorably by the supposed influence of the stars; baleful. \"Sideral blast.\" Milton.", "See Grizzled.", "Fortified with a fraise.", "Easily broken; brittle; frail; delicate; easily destroyed. The state of ivy is tough, and not fragile. Bacon. Syn. -- Brittle; infirm; weak; frail; frangible; slight. -- Frag\"ile*ly, adv.", "See Slidder. [Obs.] Chaucer.1. One who, or that which, slides; especially, a sliding part of an instrument or machine. 2. (Zoöl.)  The red-bellied terrapin (Pseudemys rugosa). [Local, U. S. ] Slider pump, a form of rotary pump."], "dictionary": ["sideral", "grisled", "fraised", "fragile", "slider"], "userLetters": ["s", "f", "g", "i", "e", "a", "r", "d", "l"] }
    const words = dictionary.dictionary

    function numberOfLetters() {
        return "The top word has ${len(words[0])} letters."
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.headlineTextContainer}>
                    <Text style={styles.headlineText}>The top word has {words[0].length} letters</Text>
                </View>
                <View style={styles.dictionaryContainer}>

                </View>
                <View style={styles.buttonContainer}>
                    <ModalButton style={styles.closeButton} onPress={onCancel}>Close Results</ModalButton>
                </View>


            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#1d4872",
        alignItems: 'center',
        justifyContent: 'center',
    },
    headlineTextContainer: {
        flex: 1,
        marginTop: 60,
        padding: 10
    },
    dictionaryContainer: {
        flex: 5
    },
    buttonContainer: {
        flex: 1
    },
    headlineText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ResultScreen