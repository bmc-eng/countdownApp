import { useState } from 'react'
import { View, FlatList, StyleSheet } from "react-native"
import LetterBox from './letterbox'


function LetterHolder() {

    const [listOfLetters, setListOfLetters] = useState(['','','','',''])

    return (
        <View style={styles.holderContainer}>
            <FlatList 
                horizontal={true} 
                data={listOfLetters}
                renderItem={(itemData) => {
                    return <LetterBox letter={itemData.item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    holderContainer: {
        marginTop:120,
        padding: 12
    }
})

export default LetterHolder