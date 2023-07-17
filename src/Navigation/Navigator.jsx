import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import ItemDetail from '../Screens/ItemDetail';
import ItemListCategory from '../Screens/ItemListCategory';
import Home from '../Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={
                        ({route}) => (
                            {
                                header: () => {
                                    return <Header title={
                                        route.name === "Home" ? "Inicio" :
                                        route.name === "ItemListCategory" ? route.params.category :
                                        route.params.itemName
                                    }/>
                                }
                            }
                        )
                    }
                >
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='ItemListCategory' component={ItemListCategory} />
                    <Stack.Screen name='ItemDetail' component={ItemDetail} />
                </Stack.Navigator>
                {/*
                    productSelected ? <ItemDetail productSelected={productSelected} setProductSelected={setProductSelected} /> :
                        categorySelected ? <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected} setProductSelected={setProductSelected} /> :
                            <Home setCategorySelected={setCategorySelected} />
                */}
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})