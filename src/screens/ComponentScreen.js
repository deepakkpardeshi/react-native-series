import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {

    const name = 'deepak p'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subHeaderStyle}>my name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    },
    subHeaderStyle: {
        fontSize: 30
    }
})

export default ComponentScreen;