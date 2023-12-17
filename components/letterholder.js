import { useState } from 'react'
import { View, FlatList, StyleSheet } from "react-native"


function LetterHolder() {

    const [listOfLetters, setListOfLetters] = useState([])

    return (
        <View>
            <FlatList />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default LetterHolder