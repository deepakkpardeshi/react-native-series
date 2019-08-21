import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {

    const friendsList = [
        { 'name' : 'friend 1', 'age': 20 },
        { 'name' : 'friend 2', 'age': 30 },
        { 'name' : 'friend 3', 'age': 40 },
        { 'name' : 'friend 4', 'age': 50 },
        { 'name' : 'friend 5', 'age': 60 },
        { 'name' : 'friend 6', 'age': 70 },
        { 'name' : 'friend 7', 'age': 80 },
        { 'name' : 'friend 8', 'age': 90 },
        { 'name' : 'friend 9', 'age': 21 }
    ]
    
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friendsList}
            renderItem={({ item }) => {
                return <Text style={styles.textStyles}>{item.name} - age {item.age}</Text>
            }
            }></FlatList>
    );
}

const styles = StyleSheet.create({
    textStyles : {
        marginVertical: 20
    }
})
export default ListScreen;