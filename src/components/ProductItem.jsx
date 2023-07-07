import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import { Image } from 'react-native'

const ProductItem = ({ item }) => {
    return (
        <Card
            additionalStyles={styles.additionalStylesCard}
        >
            <Text style={styles.textCategory}>{item.title}</Text>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{ uri: item.images[0] }}
            />
        </Card>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
        height: 110,
        width: 100,
        borderRadius: 8,
    },
    additionalStylesCard: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    textCategory: {
        fontFamily: 'YsabeauOffice-Regular'
    }
})