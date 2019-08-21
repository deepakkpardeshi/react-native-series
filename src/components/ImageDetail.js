
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const ImageDetail = ( { imageSource, title, score } ) => {
    return (
        <View>
            <Image source={imageSource}></Image>
            <Text>Image name - {title}</Text>
            <Text>Image Scrore - {score}</Text>
        </View>
    )
}

export default ImageDetail;