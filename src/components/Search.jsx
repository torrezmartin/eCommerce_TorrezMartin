import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/Colors';

const Search = ({ onSearch, errorSearch = '', setCategoryFromApp }) => {
    const [keyword, setKeyword] = useState("")

    return (
        <View style={[styles.container, styles.viewFDcolumn]}>
            <Pressable onPress={() => {
                setCategoryFromApp("")
            }}>
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
        height: '10%',
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