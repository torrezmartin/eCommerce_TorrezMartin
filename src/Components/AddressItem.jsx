import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Selector de ubicación')
    }

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {location.address}
                </Text>
            </View>
            <Pressable onPress={onChangeLocation}>
                <Entypo name="location" size={30} color={colors.abc5}>
                    <Text style={styles.text2}>Cambiar</Text>
                </Entypo>
            </Pressable>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.abc3,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "NuevaFuenteAPedidoDelTutor",
        fontSize: 17,
        color: colors.abc5,
    },
    text2: {
        fontFamily: "NuevaFuenteAPedidoDelTutor",
        fontSize: 19,
        color: colors.abc5,
    },
});