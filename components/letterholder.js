import { useState } from 'react'
import { View, FlatList, StyleSheet } from "react-native"
import LetterBox from './letterbox'


function LetterHolder({updateLetters, letters}) {

    

    return (
        <View style={styles.holderContainer}>
            <FlatList 
                horizontal={true} 
                data={letters}
                renderItem={(itemData) => {
                    return <LetterBox letter={itemData.item} onEntered={updateLetters}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    holderContainer: {
        marginTop:20,
        padding: 12
    }
})

export default LetterHolder