import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = ({ title }) => {
    return (
        <View style={styles.containerHeader}>
            <StatusBar show='false' />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.peach,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        fontSize: 25,
        fontFamily: 'VarelaRound-Regular'
    }
})