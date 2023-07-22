import React from 'react'
import Order from '../Screens/Order';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Order'
            screenOptions={
                ({ route, navigation }) => (
                    {
                        header: () => {
                            return <Header route={route} navigation={navigation} />
                        }
                    }
                )
            }
        >
            <Stack.Screen name='OrderScreen' component={Order} />
        </Stack.Navigator>
    )
}

export default OrderStack