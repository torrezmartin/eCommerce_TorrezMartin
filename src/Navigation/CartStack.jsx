import React from 'react'
import Cart from '../Screens/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
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
            <Stack.Screen name='CartScreen' component={Cart} />
        </Stack.Navigator>
    )
}

export default CartStack