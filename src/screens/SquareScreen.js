import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import ColorCounter from './ColorCounter'

const offset = 100
const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color , change) => {
        console.log(color, (color+change > 255 || color+change < 0));
        switch(color) {
            case 'red': {
                (red+change > 255 || red+change < 0) ? null : setRed (red+change) 
                return;
            }
            case 'blue': {
                (blue+change > 255 || blue+change < 0) ? null : setBlue (blue+change)
                return;
            }
            case 'green': {
                (green+change > 255 || green+change < 0) ? null :  setGreen (green+change)
                return;
            }

        }
       
    }
    return (
    <View>
        <ColorCounter 
        onIncrease={() => setColor( 'red', offset )}
        onDecrease={() => setColor( 'red', -1 * offset )}
        color='red'>
        </ColorCounter>
        <ColorCounter color='blue'
        onIncrease={() => setColor( 'blue', offset )}
        onDecrease={() => setColor( 'blue', -1 * offset )}
        ></ColorCounter>
        <ColorCounter color='green'
        onIncrease={() => setColor( 'green', offset )}
        onDecrease={() => setColor( 'green', -1 * offset )}
        ></ColorCounter>
        <View style={{ height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>)
}

const styles = StyleSheet.create({

})

export default SquareScreen;