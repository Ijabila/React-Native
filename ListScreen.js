import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
const friends = [
    {name: 'Ife', age:'20'},
    {name: 'Vikky', age:'21'},
    {name: 'Summer', age:'22'},
    {name: 'Danny', age:'23'},
    {name: 'Zia', age:'24'},
];    

    return (
        <FlatList
        keyExtractor={(friend) => friend.name}
         data={friends}
         renderItem={({item}) => {
         return <Text style={styles.textStyle}>{item.name} is {item.age} years old.</Text>;
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;