import React from 'react'
import Header from '../Components/Header';
import ItemDetail from '../Screens/ItemDetail';
import ItemListCategory from '../Screens/ItemListCategory';
import Home from '../Screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
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
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ItemListCategory' component={ItemListCategory} />
            <Stack.Screen name='ItemDetail' component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack