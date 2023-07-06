import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Colors'

const Card = ({ children }) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 50,
        width: 250,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.two,
        marginVertical: 5,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})