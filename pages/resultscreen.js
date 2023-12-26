import { useState } from 'react'
import { View, Modal, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import ModalButton from '../components/modalbutton'
import WordButton from '../components/wordButton'

function ResultScreen({ onCancel, visible, dictionary }) {

    //const dictionary = { "definitions": ["1. Relating to the stars. 2. (Astrol.)  Affecting unfavorably by the supposed influence of the stars; baleful. \"Sideral blast.\" Milton.", "See Grizzled.", "Fortified with a fraise.", "Easily broken; brittle; frail; delicate; easily destroyed. The state of ivy is tough, and not fragile. Bacon. Syn. -- Brittle; infirm; weak; frail; frangible; slight. -- Frag\"ile*ly, adv.", "See Slidder. [Obs.] Chaucer.1. One who, or that which, slides; especially, a sliding part of an instrument or machine. 2. (Zoöl.)  The red-bellied terrapin (Pseudemys rugosa). [Local, U. S. ] Slider pump, a form of rotary pump."], "dictionary": ["sideral", "grisled", "fraised", "fragile", "slider"], "userLetters": ["s", "f", "g", "i", "e", "a", "r", "d", "l"] }
    const topWord = dictionary[0]
    //const definitions = dictionary.definition
    const [definition, setDefinition] = useState('')

    function definitionHandler(wordNumber) {
        console.log(wordNumber)
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.headlineTextContainer}>
                    <Text style={styles.headlineText}>The top word has {topWord.word.length} letters</Text>
                </View>
                <View style={styles.dictionaryContainer}>
                    <FlatList
                        horizontal={false}
                        data={dictionary}
                        renderItem={(itemData) => {
                            return (
                                <WordButton 
                                onPress={definitionHandler}
                                word={itemData.item.word}
                                wordNumber={itemData.item.id}
                                />
                            )
                        }}
                    />
                </View>
                <View style={styles.definitionContainer}>
                    <Text style={styles.definitionText}>{definition}</Text>
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
        flexWrap: 'wrap',
        flexShrink: 1,
        flexDirection: 'row'
    },
    dictionaryContainer: {
        flex: 5,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        marginBottom: 40
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
    definitionText: {
        color: 'white',
        fontsize: 20,
        flexShrink: 1,
        flexWrap: 'wrap'
    }
})

export default ResultScreen