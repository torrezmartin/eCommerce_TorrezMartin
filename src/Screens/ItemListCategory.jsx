import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'

const ItemListCategory = ({ navigation, route }) => {
    const category = useSelector(state => state.shopReducer.value.categorySelected)
    const { data: productsSelected, isLoading, isError } = useGetProductsByCategoryQuery(category);

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState('')

    useEffect(() => {
        const productsFiltered = productsSelected ? productsSelected.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())) : null
        setProducts(productsFiltered)
    }, [productsSelected, keyword])

    const onSearch = (input) => {
        const regExp = /^[a-zA-Z0-9\ ]*$/
        const resultTest = regExp.test(input)

        if (resultTest) {
            setKeyword(input)
            setKeywordError('')
        } else {
            setKeywordError('Sólo letras, números y espacios')
        }
    }

    return (
        <View style={styles.container}>
            <Search
                onSearch={onSearch}
                errorSearch={keywordError}
            />
            <FlatList
                data={products}
                keyExtractor={product => product.id}
                renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.abc4,
        alignItems: 'center',
        paddingBottom: 10
    }
})