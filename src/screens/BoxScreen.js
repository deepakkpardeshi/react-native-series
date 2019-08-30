import React from 'react'
import { StyleSheet, View } from 'react-native' 

const BoxScreen = () => {
    return <View style={styles.ViewStyle}>
        <View style={{backgroundColor: 'red', height:100, width: 100}}></View>
        <View style={styles.ViewStyleGreen}></View>
        <View style={{backgroundColor: 'blue', height:100, width: 100}}></View>
    </View>
}

const styles = StyleSheet.create({
    ViewStyle: {
        flexDirection:"row",
        justifyContent:"space-between",
        height: 200
    },
    ViewStyleGreen: {
        alignSelf:"flex-end",
        backgroundColor: 'green',
        height:100,
        width: 100
    }
}) 

export default BoxScreen;