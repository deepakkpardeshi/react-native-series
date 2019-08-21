import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Button
                title='Increment'
                onPress={() => { setCounter(counter + 1) }}
            ></Button>
            <Button
                title='Decrement'
                onPress={() => { setCounter(counter - 1) }}
            ></Button>
            <Text>Counter Count {counter}</Text>
        </View>
    );
}

export default CounterScreen;