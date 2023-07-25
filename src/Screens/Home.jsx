import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {
    const categories = useSelector(state => state.shopReducer.value.allCategories)

    return (
        <View style={styles.container}>
            <Counter />
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightPink,
        alignItems: 'center',
        paddingBottom: 10
    }
})