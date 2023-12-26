import { Pressable, Text, StyleSheet } from "react-native"

function WordButton({ onPress, wordNumber, word }) {

    function definitionHandler() {
        onPress(wordNumber)
    }
    return (
        <Pressable
            onPress={definitionHandler}
            style={({ pressed }) =>
                pressed
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer
            }
        >
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
    },
    pressed: {
        opacity: 0.85
    }

})