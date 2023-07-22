import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import { colors } from '../Global/Colors'

const ItemDetail = ({ navigation, route }) => {
    const [product, setProduct] = useState({})

    const { item } = route.params

    useEffect(() => {
        const productsFiltered = productsRaw.find(product => product.id === item)
        setProduct(productsFiltered)
    }, [item])

    return (
        <>
            {product.images ?
                <View style={styles.container}>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={{ uri: product.images[0] }}
                    />
                    <Text>Nombre: {product.title}</Text>
                    <Text>Descripción: {product.description}</Text>
                    <Text>Valor: ${product.price}</Text>
                    <Button title='Agregar al carrito' />
                </View>
                : null}
        </>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.lightPink,
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 10
    },
    image: {
        height: 200,
        width: '100%',
        minWidth: 100,
        maxWidth: 250,
        borderRadius: 8,
    },
})