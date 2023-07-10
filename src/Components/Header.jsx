import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
    return (
        <View style={styles.containerHeader}>
            <StatusBar show='false' />
            <Text style={styles.text}>eCommerce - Torrez Martin</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '10%',
        backgroundColor: colors.peach,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontFamily: 'VarelaRound-Regular'
    }
})