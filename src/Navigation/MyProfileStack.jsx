import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import MyProfile from "../Screens/MyProfile";
import ImageSelector from "../Screens/ImageSelector";
import ListAddress from "../Screens/ListAdress";
import LocationSelector from "../Screens/LocationSelector";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Mi Perfil"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="Mi Perfil" component={MyProfile} />
            <Stack.Screen name="Selector de imagen" component={ImageSelector} />
            <Stack.Screen name="Direcciones" component={ListAddress}/>
            <Stack.Screen name="Selector de ubicación" component={LocationSelector} />
        </Stack.Navigator>
    );
};

export default MyProfileStack;