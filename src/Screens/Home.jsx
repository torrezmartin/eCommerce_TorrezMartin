import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'

const Home = ({ navigation }) => {
    const { data: categories, isLoading, isError } = useGetCategoriesQuery();

    return (
        <View style={styles.container}>
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
        backgroundColor: colors.abc4,
        alignItems: 'center',
        paddingBottom: 10
    }
})