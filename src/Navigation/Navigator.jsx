import React from 'react'
import ShopStack from './ShopStack';
import CartStack from './CartStack';

import { SafeAreaView, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../Global/Colors';
import OrderStack from './OrderStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    const { email } = useSelector(state => state.userReducer.value)

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {email ?
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
                                            <Entypo name="shop" size={24} color={focused ? "black" : "gray"} />
                                        </View>
                                    );
                                }
                            }} />
                        <Tab.Screen name='Cart' component={CartStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View>
                                            <Feather name="shopping-cart" size={24} color={focused ? "black" : "gray"} />
                                        </View>
                                    );
                                }
                            }} />
                        <Tab.Screen name='Order' component={OrderStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View>
                                            <Feather name="list" size={24} color={focused ? "black" : "gray"} />
                                        </View>
                                    );
                                }
                            }} />
                    </Tab.Navigator>

                    :
                    <AuthStack />
                }
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarSt: {
        backgroundColor: colors.lightPink,
        height: 90
    }
})