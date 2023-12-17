import { useState } from 'react'
import { View, FlatList, StyleSheet } from "react-native"


function LetterHolder() {

    const [listOfLetters, setListOfLetters] = useState([])

    return (
        <View style={styles.holderContainer}>
            <FlatList horizontal={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    holderContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default LetterHolder