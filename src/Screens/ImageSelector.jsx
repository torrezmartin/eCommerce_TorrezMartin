import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ButtonCustom from "../Components/ButtonCustom";
import { colors } from "../Global/Colors";
import * as MediaLibrary from "expo-media-library";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "../Features/User/userSlice";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value);

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                const response = await MediaLibrary.createAssetAsync(image);
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <ButtonCustom title="Tomar otra foto" onPress={pickImage} />
                    <ButtonCustom title="Confirmar foto" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>Sin foto a mostrar...</Text>
                    </View>
                    <ButtonCustom title="Tomar foto" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        paddingTop: 20,
        backgroundColor: colors.abc4
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.abc1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});