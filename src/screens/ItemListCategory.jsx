import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../data/products.json'
import ProductItem from '../components/ProductItem'
import { colors } from '../global/Colors'
import Search from '../components/Search'

const ItemListCategory = ({ category, setCategoryFromApp }) => {

    const [categorySelected, setCategorySelected] = useState(category)
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState("")
    const [keywordError, setKeywordError] = useState('')

    useEffect(() => {
        const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.toLowerCase().includes(keyword.toLowerCase()))
        setProducts(productsFiltered)

    }, [categorySelected, keyword])

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
                setCategoryFromApp={setCategoryFromApp}
            />
            <FlatList
                data={products}
                keyExtractor={product => product.id}
                renderItem={({ item }) => ProductItem({ item })}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        alignItems: 'center'
    }
})