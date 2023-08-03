import { Pressable, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setIdSelected, setNameProductSelected } from "../Features/Shop/shopSlice";

const ProductItem = ({ item, navigation }) => {
    const dispatch = useDispatch()
    const onItemSelected = () => {
        navigation.navigate('ItemDetail')
        dispatch(setIdSelected(item.id))
        dispatch(setNameProductSelected(item.title))
    }

    return (
        <Pressable
            onPress={onItemSelected}
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