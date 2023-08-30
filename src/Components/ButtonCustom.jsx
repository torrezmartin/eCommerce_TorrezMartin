import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const ButtonCustom = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default ButtonCustom;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.abc5,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.abc1,
        fontFamily: 'NuevaFuenteAPedidoDelTutor',
        fontSize: 22
    },
});