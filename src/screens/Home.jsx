import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Colors'
import categories from '../data/categories.json'
import CategoryItem from '../components/CategoryItem'

const Home = ({ setCategorySelected }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({ item }) => CategoryItem({ item, setCategorySelected })}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        alignItems: 'center'
    }
})