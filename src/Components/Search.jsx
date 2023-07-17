import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

const Search = ({ navigation, onSearch, errorSearch = '', setCategorySelected }) => {
    const [keyword, setKeyword] = useState('')
    const {height, width} = useWindowDimensions();

    return (
        <View style={[styles.container, styles.viewFDcolumn]}>
            <Pressable onPress={() => { navigation.goBack() }}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <View style={[styles.search, styles.viewFDrow]}>
                <TextInput style={styles.input}
                    placeholder='Search...'
                    value={keyword}
                    onChangeText={setKeyword}
                />
                <Pressable onPress={() => onSearch(keyword)}>
                    <FontAwesome name="search" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => {
                    setKeyword("")
                    onSearch("")
                }}>
                    <FontAwesome5 name="eraser" size={24} color="black" />
                </Pressable>
            </View>
            {errorSearch ? <View><Text>{errorSearch}</Text></View> : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        width: 250,
        fontSize: 18,
        backgroundColor: colors.pink,
        borderRadius: 10,
        paddingLeft: 5,
        fontFamily: 'Montserrat-Regular'
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
    },
    viewFDcolumn: {
        flexDirection: 'column'
    },
    viewFDrow: {
        flexDirection: 'row'
    }
})