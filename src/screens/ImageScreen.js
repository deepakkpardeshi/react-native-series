import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='beach' imageSource={require('../../assets/beach.jpg')} score='10'/>
            <ImageDetail title='moutain' imageSource={require('../../assets/mountain.jpg')} score='5'/>
            <ImageDetail title='forest' imageSource={require('../../assets/forest.jpg')} score='8'/>
        </View>
    )
}

export default ImageScreen;