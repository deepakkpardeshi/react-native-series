import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {

    const [name, setName] = useState('')

    return (
        <View>
            <Text>Name</Text>
            <TextInput 
            style={styles.Input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(newValue) => setName(newValue)}
            ></TextInput>
            <Text>Hi ${name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        borderColor: 'black',
        borderWidth: 1.0,
        padding: 10,
        margin: 10
    }
})

export default TextScreen;