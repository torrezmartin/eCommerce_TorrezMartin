import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors';

import AuthStack from './AuthStack';
import CartStack from './CartStack';
import MyProfileStack from './MyProfileStack';
import OrderStack from './OrderStack';
import ShopStack from './ShopStack';

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
                        <Tab.Screen name="MyProfile" component={MyProfileStack}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.item}>
                                            <Ionicons name="person-circle-outline" size={24} color={focused ? 'black' : 'gray'} />
                                        </View>
                                    );
                                },
                            }}
                        />
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