import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const ColorCounter = ( {color, onIncrease, onDecrease} ) => {

    return (<View>
        <Text>{color}</Text>
        <Button 
        title={`increase ${color}`}
        onPress={() => onIncrease()}
        ></Button>
        <Button 
        title={`decrease ${color}`}
        onPress={() => onDecrease()}
        ></Button>
        </View>)
}

const styles = StyleSheet.create({

})

export default ColorCounter;