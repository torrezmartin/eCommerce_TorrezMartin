import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'

const Order = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={OrderData}
                keyExtractor={orderItem => orderItem.id}
                renderItem={({item}) => {
                    return (
                        <OrderItem order={item}/>
                    )
                }}
            />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.lightPink,
    }
})