import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'

const Cart = () => {
    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)

    return (
        <View style={styles.container}>
            <FlatList
                data={CartData}
                keyExtractor={cartItem => cartItem.id}
                renderItem={({ item }) => {
                    return (
                        <CartItem cartItem={item} />
                    )
                }}
            />
            <Button title={'Confirmar carrito\n\n Total: $' + total} />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.lightPink,
    }
})