import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ( {navigation} ) => {
// props.navigation // this is destructuring example
  return (
    <View>
       <Text style={styles.text}>HomeScreen</Text>
       <Button 
       title='Component'
       onPress={() => {navigation.navigate('Component')}}
       />
       <Button 
       title='List'
       onPress={() => {navigation.navigate('List')}}
       />
       <Button 
       title='Image'
       onPress={() => {navigation.navigate('Image')}}
       />
       <Button 
       title='Counter'
       onPress={() => {navigation.navigate('Counter')}}
       />
        <Button 
       title='Color'
       onPress={() => {navigation.navigate('Color')}}
       />
       <Button 
       title='Square Color'
       onPress={() => {navigation.navigate('Square')}}
       />
       <Button 
       title='Text Screen'
       onPress={() => {navigation.navigate('MyText')}}
       />
        <Button 
       title='Box Screen'
       onPress={() => {navigation.navigate('Box')}}
       />
       {/* <TouchableOpacity
       onPress={() => {console.log('c pressed')}}>
        <Text>List</Text>
        <Text>List</Text>
       </TouchableOpacity> */}
    </View>
  )
 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
