import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

function LetterBox({ onInput }) {

    const [enteredLetter, setEnteredLetter] = useState('')

    function onChangeText(enteredLetter) {
        setEnteredLetter(enteredLetter)
        console.log(enteredLetter)
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <TextInput style={styles.textBox}
                    maxLength={1}
                    onChangeText={onChangeText}
                    value={enteredLetter}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#095b9e',
        width: 120,
        height: 120,
        padding: 5
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#044479'
    },
    textBox: {
        flex: 1,
        fontSize: 80,
        padding: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Futura-Bold'
    }

})

export default LetterBox