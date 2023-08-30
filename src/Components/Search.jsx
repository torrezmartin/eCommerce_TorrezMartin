import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../Global/Colors';

const Search = ({ onSearch, errorSearch = '' }) => {
    const [keyword, setKeyword] = useState('')

    return (
        <View style={[styles.container, styles.viewFDcolumn]}>
            <View style={[styles.search, styles.viewFDrow]}>
                <TextInput style={styles.input}
                    placeholder='Buscar...'
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
        backgroundColor: colors.abc3,
        borderRadius: 10,
        paddingLeft: 5,
        fontFamily: 'NuevaFuenteAPedidoDelTutor'
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