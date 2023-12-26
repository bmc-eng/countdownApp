import { Pressable, Text, StyleSheet } from "react-native"

function WordButton({ onPress, wordNumber, word }) {

    function definitionHandler() {
        onPress(wordNumber)
    }
    return (
        <Pressable onPress={definitionHandler}>
            <Text style={styles.wordButton}>{word}</Text>
        </Pressable>
    )
}

export default WordButton

const styles = StyleSheet.create({
    wordButton: {

        color: 'white',
        fontSize: 25,
        padding: 10


    }
})