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
