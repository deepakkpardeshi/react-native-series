import React, { useState } from 'react'
import { View, Button, StyleSheet, rgb, FlatList } from 'react-native'

const ColorScreen = () => {

    const [ colors, setColors ] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button
                title='add a color'
                onPress={() => { 
                    setColors([...colors, randomColor()]);
                 }}> }
            </Button>
            <FlatList
                keyExtractor={item => item }
                data={colors}
                renderItem={ ({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            ></FlatList>
        </View>
    )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * Math.floor(255));
    const blue = Math.floor(Math.random() * Math.floor(255));
    const green = Math.floor(Math.random() * Math.floor(255));

    return `rgb(${red},${blue},${green})`;
}
const styles = StyleSheet.create({});

export default ColorScreen;