import React, { useReducer } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import ColorCounter from './ColorCounter'

const offset = 100
const reducer = (state, action) => {
    switch (action.type) {
        case 'Change_red': {
            return (state.red + action.payload > 255 || state.red + action.payload < 0)
                ? state
                : { ...state, red: state.red + action.payload };
        }
        case 'Change_blue': {
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
                ? state
                : { ...state, blue: state.blue + action.payload };
        }
        case 'Change_green': {
            return (state.green + action.payload > 255 || state.green + action.payload < 0)
                ? state
                : { ...state, green: state.green + action.payload };
        }
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'Change_red', payload: offset })}
                onDecrease={() => dispatch({ type: 'Change_red', payload: -1 * offset })}
                color='red'>
            </ColorCounter>
            <ColorCounter color='blue'
                onIncrease={() => dispatch({ type: 'Change_blue', payload: offset })}
                onDecrease={() => dispatch({ type: 'Change_blue', payload: -1 * offset })}
            ></ColorCounter>
            <ColorCounter color='green'
                onIncrease={() => dispatch({ type: 'Change_green', payload: offset })}
                onDecrease={() => dispatch({ type: 'Change_green', payload: -1 * offset })}
            ></ColorCounter>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        </View>)
}

const styles = StyleSheet.create({

})

export default SquareScreen;