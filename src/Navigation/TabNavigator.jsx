import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartStack from './CartStack';
import MyProfileStack from './MyProfileStack';
import OrderStack from './OrderStack';
import ShopStack from './ShopStack';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarSt
            }}
        >
            <Tab.Screen name='Shop' component={ShopStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Entypo name="shop" size={24} color={focused ? colors.abc1 : colors.abc4} />
                            </View>
                        );
                    }
                }} />
            <Tab.Screen name='Cart' component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Feather name="shopping-cart" size={24} color={focused ? colors.abc1 : colors.abc4} />
                            </View>
                        );
                    }
                }} />
            <Tab.Screen name='Order' component={OrderStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Feather name="list" size={24} color={focused ? colors.abc1 : colors.abc4} />
                            </View>
                        );
                    }
                }} />
            <Tab.Screen name="MyProfile" component={MyProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.item}>
                                <Ionicons name="person-circle-outline" size={24} color={focused ? colors.abc1 : colors.abc4} />
                            </View>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarSt: {
        backgroundColor: colors.abc5,
        height: 90
    }
})