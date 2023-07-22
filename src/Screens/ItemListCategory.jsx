import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListCategory = ({ navigation, route }) => {

    const { category } = route.params

    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState('')

    useEffect(() => {
        const productsFiltered = productsRaw.filter(product => product.category === category && product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(productsFiltered)

    }, [category, keyword])

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
                navigation={navigation}
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
        backgroundColor: colors.lightPink,
        alignItems: 'center',
        paddingBottom: 10
    }
})