import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

const Cart = () => {
    const { total, items: CartData, user, updatedAt } = useSelector(state => state.cartReducer.value)
    const [triggerPost, result] = usePostCartMutation()

    const confirmCart = () => {
        triggerPost({total, items: CartData, user, updatedAt})
    }

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
            <Button
                title={'Confirmar carrito\n\n Total: $' + (total == null ? 0 : total)}
                onPress={confirmCart}
                disabled={total == 0 || total == null}
            />
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