import { useState } from 'react'
import { View, Modal, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import ModalButton from '../components/modalbutton'
import WordButton from '../components/wordButton'

function ResultScreen({ onCancel, visible, dictionary }) {

    const topWord = dictionary[0]
    const [definition, setDefinition] = useState('')

    function definitionHandler(wordNumber) {
        setDefinition(dictionary[wordNumber].definition)
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
        fontSize: 20,
        flexShrink: 1,
        flexWrap: 'wrap',
        paddingHorizontal: 30
    }
})

export default ResultScreen