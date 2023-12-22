import { View, Modal, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import ModalButton from '../components/modalbutton'

function ResultScreen({ onCancel, dictionary, visible }) {

    //const dictionary = { "definitions": ["1. Relating to the stars. 2. (Astrol.)  Affecting unfavorably by the supposed influence of the stars; baleful. \"Sideral blast.\" Milton.", "See Grizzled.", "Fortified with a fraise.", "Easily broken; brittle; frail; delicate; easily destroyed. The state of ivy is tough, and not fragile. Bacon. Syn. -- Brittle; infirm; weak; frail; frangible; slight. -- Frag\"ile*ly, adv.", "See Slidder. [Obs.] Chaucer.1. One who, or that which, slides; especially, a sliding part of an instrument or machine. 2. (Zoöl.)  The red-bellied terrapin (Pseudemys rugosa). [Local, U. S. ] Slider pump, a form of rotary pump."], "dictionary": ["sideral", "grisled", "fraised", "fragile", "slider"], "userLetters": ["s", "f", "g", "i", "e", "a", "r", "d", "l"] }
    const words = dictionary.dictionary

    function definitionHandler() {
        onCancel()
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.headlineTextContainer}>
                    <Text style={styles.headlineText}>The top word has {words[0].length} letters</Text>
                </View>
                <View style={styles.dictionaryContainer}>
                    <FlatList
                        horizontal={false}
                        data={words}
                        renderItem={(itemData) => {
                            return (<Pressable onPress={definitionHandler}>
                                <Text style={styles.wordButton}>{itemData.item}</Text>

                            </Pressable>
                               
                            )
                        }}
                    />
                </View>
                <View style={styles.definitionContainer}>

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
        padding: 10
    },
    headlineTextContainer: {
        flex: 2,
        marginTop: 60,
        flexWrap:'wrap',
        flexShrink: 1,
        flexDirection:'row'
    },
    dictionaryContainer: {
        flex: 5,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    definitionContainer: {
        flex: 5
    },
    headlineText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wordButton: {
        color: 'white',
        fontSize: 25,
        padding: 10

    }
})

export default ResultScreen