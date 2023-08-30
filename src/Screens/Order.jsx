import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'
import { useGetOrdersQuery } from '../Services/orderServices'
import { useSelector } from 'react-redux'

const Order = () => {
    const email = useSelector(state => state.userReducer.value.email)
    const { data: orderData, isLoading, isError } = useGetOrdersQuery(email);

    return (
        <View style={styles.container}>
            <FlatList 
                data={orderData}
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
        backgroundColor: colors.abc4,
        height: '100%',
    }
})