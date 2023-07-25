import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from "../Features/Shop/shopSlice";

const CategoryItem = ({ item, navigation }) => {
    const dispatch = useDispatch()
    const onSelectedCategory = () => {
        navigation.navigate('ItemListCategory')
        dispatch(setCategorySelected(item))
    }

    return (
        <Pressable onPress={onSelectedCategory}>
            <Card>
                <Text style={styles.textCategory}>{item}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 18,
        fontFamily: 'YsabeauOffice-Regular'
    }
})