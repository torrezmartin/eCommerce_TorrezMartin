import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ButtonCustom from "../Components/ButtonCustom";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";
import { colors } from "../Global/Colors";

const MyProfile = ({ navigation }) => {
    const { localId, profileImage, email } = useSelector(state => state.userReducer.value)

    const { data: image } = useGetProfileImageQuery(localId)

    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Selector de imagen')
    };

    const launchLocation = async () => {
        navigation.navigate('Direcciones')
    }

    return (
        <View style={styles.container}>
            {profileImage || cameraImage ? (
                <Image
                    source={{ uri: profileImage || cameraImage }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <Text style={styles.emailStyle}>Correo electrónico: {email}</Text>
            <ButtonCustom onPress={launchCamera} title="Agrega una foto de perfil" />
            <ButtonCustom onPress={launchLocation} title="Mi dirección" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.abc4,
        height: '100%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    emailStyle: {
        fontFamily: "fontToUse",
        fontSize: 18
    }
});