import { Pressable, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({ item, navigation }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate('ItemDetail', { item: item.id, itemName: item.title })}
        >
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
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
        height: 110,
        width: '40%',
        minWidth: 100,
        maxWidth: 250,
        borderRadius: 8,
    },
    additionalStylesCard: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    textCategory: {
        fontFamily: 'YsabeauOffice-Regular',
        width: '50%'
    }
})